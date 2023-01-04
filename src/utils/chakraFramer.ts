import { Box, BoxProps, Flex, FlexProps, Img, ImgProps } from "@chakra-ui/react"
import { motion } from "framer-motion"

export const MotionImage = motion<Omit<ImgProps, "transition">>(Img)
export const MotionFlex = motion<Omit<FlexProps, "transition">>(Flex)
export const MotionBox = motion<Omit<BoxProps, "transition">>(Box)