/*
 * Description: Ignore
 * Created by: betty.liang
 * Creation time: 2022/2/10 16:09
 * Modification description: 
 * Modified by: Please set LastEditors
 * Modification time: 2022/2/10 16:09
 * Version: V1.0
 */
import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;