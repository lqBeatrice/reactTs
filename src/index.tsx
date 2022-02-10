/*
 * Description: Ignore
 * Created by: betty.liang
 * Creation time: 2022/2/10 16:10
 * Modification description: 
 * Modified by: Please set LastEditors
 * Modification time: 2022/2/10 16:10
 * Version: V1.0
 */
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);