import { Meta, StoryObj } from "@storybook/react";
import { TestButton } from "../common/components/TestButton";

const meta :Meta<typeof TestButton>={
    component:TestButton,
    title:"test button",
    argTypes:{
        variant:{
            control:"select",
            options:["primary","secondary","danger"],
            
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
export const DefaultButton:Story={
    args:{
        children:"AAA"
    }
}
export const PrimaryButton:Story={
    args:{
        variant:"primary",
        children:"AAA"
    }
}
export const SecondaryButton:Story={
    args:{
        variant:"secondary",
        children:"AAA"
    }
}
export const DangerButton:Story={
    args:{
        variant:"danger",
        children:"AAA"
    }
}

export const PendingButton:Story={
    args:{
        variant:"danger",
        children:"AAA",
        pending:true
    }
}

export const GroupedButtons:Story ={
    render :()=>(
        <div className="flex-col justify-center">
            <TestButton className={"mr-2"}>デフォルト</TestButton>
            <TestButton className={"mr-2"} variant={"primary"}>primary</TestButton>
            <TestButton className={"mr-2"} variant={"secondary"}>secondary</TestButton>
            <TestButton className={"mr-2"} variant={"danger"}>danger</TestButton>
            <TestButton className={"mr-2"} size={"lg"}>デフォルト LG</TestButton>
            <TestButton className={"mr-2"} size={"md"}>デフォルト MD</TestButton>
            <TestButton className={"mr-2"} size={"sm"}>デフォルト SM</TestButton>
            <TestButton pending={true}>Pending</TestButton>
        </div>
    )
}