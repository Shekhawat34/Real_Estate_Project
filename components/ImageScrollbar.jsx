import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
  // Add your logic if needed
  const { scrollPrev } = useContext(VisibilityContext);

  
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon as={FaArrowAltCircleLeft} 
      onClick={scrollPrev}
      fontSize="2xl" 
      cursor="pointer" />
    </Flex>
  );
};

const RightArrow = () => {
  // Add your logic if needed
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginLeft="1">
      <Icon as={FaArrowAltCircleRight}
      onClick={scrollNext}
      fontSize="2xl"
      cursor="pointer" />
    </Flex>
  );
};

export default function ImageScrollbar({ data }) {
  return (
    <Box  overflowX="auto">
      <Flex>
      
        {data.map((item) => (
          <Box key={item.id} width="910px" overflow="hidden" p="1" flexShrink={0}>
            <Image
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={1300}
              height={700}
              sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            />
          </Box>
        ))}
       
      </Flex>
    </Box>
  );
}
