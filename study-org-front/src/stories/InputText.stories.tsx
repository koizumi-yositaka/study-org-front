import { Meta, StoryObj } from "@storybook/react";
import { InputText } from "../common/components/InputText";

const meta :Meta<typeof InputText>={
    component:InputText,
    title:"test text",
    argTypes:{
        variant:{
            control:"radio",
            options:["normal","dark"],
            
        },
        withSize:{
            control:"radio",
            options:["sm","md","lg"],
        }
    },
    tags:["autodocs"]

}

export default meta;
type Story = StoryObj<typeof meta>;
/**
 * 
 * AAAA
 */
export const DefaultTextBox:Story={
    args:{
        placeholder:"here"
    }
}

// export const GroupedButtons:Story ={
//     render :()=>(
//         <div className="flex-col justify-center">
//             <TestButton className={"mr-2"}>デフォルト</TestButton>
//             <TestButton className={"mr-2"} variant={"primary"}>primary</TestButton>
//             <TestButton className={"mr-2"} variant={"secondary"}>secondary</TestButton>
//             <TestButton className={"mr-2"} variant={"danger"}>danger</TestButton>
//             <TestButton className={"mr-2"} size={"lg"}>デフォルト LG</TestButton>
//             <TestButton className={"mr-2"} size={"md"}>デフォルト MD</TestButton>
//             <TestButton className={"mr-2"} size={"sm"}>デフォルト SM</TestButton>
//             <TestButton pending={true}>Pending</TestButton>
//         </div>
//     )
// }