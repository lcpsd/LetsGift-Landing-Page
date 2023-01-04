import { Box, BoxProps, Button, ButtonProps, Flex, FlexProps, Img, ImgProps, Text, TextProps } from "@chakra-ui/react"
import { motion } from "framer-motion"

export const MotionImage = motion<Omit<ImgProps, "transition">>(Img)
export const MotionFlex = motion<Omit<FlexProps, "transition">>(Flex)
export const MotionBox = motion<Omit<BoxProps, "transition">>(Box)
export const MotionText = motion<Omit<TextProps, "transition">>(Text)
export const MotionButton = motion<Omit<ButtonProps, "transition">>(Button)