import { Box, Icon } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

const Footer=()=>(
    <Box textAlign="center" p="S" color="grey.600" borderTop="1px" borderColor="grey.100">
        2024 Realtor,  Inc. All rights reserved. ©<br />
       <Icon>
            <a href="https://github.com/Shekhawat34"><BsGithub size={20}/>Github</a>
           
        </Icon>
        Made with love by{" Lokender Singh Shekhawat"}

  
        
        
    
    </Box>

)

export default Footer;