import React from "react";

import { DotSpinner } from '@uiball/loaders'
import Flex from "../Flex/Flex";



function Loader() {
  return <Flex>
    <DotSpinner 
    size={200}
    speed={2} 
    color="black" 
    />
 </Flex>
}

export default Loader;
