import { Meta, StoryObj } from "@storybook/react";
import { TestButton } from "../common/components/TestButton";
import { InformationCard } from "../common/components/InformationCard";

const meta :Meta<typeof InformationCard>={
    component:InformationCard,
    title:"test InformationCard",
    argTypes:{
        message:{
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
export const DefaultInformationCard:Story={
    args:{
        message:"this is a template message"
    }
}
