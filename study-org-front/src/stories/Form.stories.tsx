import { Meta, StoryObj } from "@storybook/react";
import { InputText } from "../common/components/InputText";
import { LabelAndErrorMsgWrapper } from "../routes/_auth/-components/LabelAndErrorMsgWrapper";

const meta :Meta<typeof LabelAndErrorMsgWrapper>={
    component:LabelAndErrorMsgWrapper,
    title:"test Form",
    argTypes:{
        variant:{
            control:"radio",
            options:["normal","dark"],
            
        },
        label:{
            control:"text"
        },
        errorElem:{
            control:"text"
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
    render :({label,errorElem})=>(
        <LabelAndErrorMsgWrapper label={label} errorElem={errorElem}>
            <InputText></InputText>
        </LabelAndErrorMsgWrapper>
    ),
   
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