import { SliderContext } from "@/utils/context/SliderContext";
import { HStack, Box } from "@chakra-ui/react";
import {
	FC,
	useState,
	useEffect,
	Children,
	cloneElement,
	TouchEventHandler,
	ReactElement,
} from "react";
import { Dot } from "../Navigation/Dot";
import { SlideList } from "../SlideList";

export type SliderProps = {
	children: ReactElement[];
	autoPlay?: boolean;
	autoPlayDelay?: number;
};

export const Slider: FC<SliderProps> = ({
	children,
	autoPlay = false,
	autoPlayDelay = 5000,
}) => {
	const [pages, setPages] = useState<ReactElement[]>([]);
	const [activeSlide, setSlide] = useState<number>(0);
	const [touchPosition, setTouchPosition] = useState<number | null>(null);

	// Needed to arrow example function changeSlide(-1) = slide into right direction, changeSlide(1) = slide into left direction
	const changeSlide = (direction = 1) => {
		let slideNumber = 0;

		if (activeSlide + direction < 0) {
			slideNumber = pages.length - 1;
		} else {
			slideNumber = (activeSlide + direction) % pages.length;
		}
		setSlide(slideNumber);
	};

	const goToSlide = (index: number) => {
		setSlide(index % pages.length);
	};

	const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
		const touchDown = e.touches[0].clientX;

		setTouchPosition(touchDown);
	};

	const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
		if (touchPosition === null) {
			return;
		}

		const currentPosition = e.touches[0].clientX;
		const direction = touchPosition - currentPosition;
		if (direction > 10) {
			changeSlide(1);
		}

		if (direction < -10) {
			changeSlide(-1);
		}

		setTouchPosition(null);
	};

	useEffect(() => {
		setPages(
			Children.map(children, (_child) => {
				return cloneElement(_child);
			})
		);
	}, []);

	useEffect(() => {
		if (!autoPlay) return;

		const interval = setInterval(() => {
			changeSlide(1);
		}, autoPlayDelay);

		return () => {
			clearInterval(interval);
		};
	}, [pages.length, activeSlide]); // when images uploaded or slide changed manually we start timer

	return (
		<Box
			width={"100%"}
			display='flex'
			overflow={"hidden"}
			justifyContent='space-between'
			flexDirection={"column"}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			className='slider'>
			<SliderContext.Provider
				value={{
					goToSlide,
					changeSlide,
					childsCount: pages.length,
					activeSlide: activeSlide,
					childs: pages,
				}}>
				<SlideList />
				<HStack className='navigation'>
					{pages.map((_slide: unknown, index: number) => (
						<Dot index={index} key={index} />
					))}
				</HStack>
			</SliderContext.Provider>
		</Box>
	);
};
