
import * as React from "react"

 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link, LinkProps } from "@tanstack/react-router";
import { useRecoilValue } from "recoil";
import { LoginEmailState } from "@/state/auth";
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
 
export function HeaderComp() {
  const email = useRecoilValue(LoginEmailState)
  return (
    <div className="flex justify-between items-center sticky top-0">
      <div>
{email}
      </div>
      <div className="pr-4">
    <NavigationMenu >
      <NavigationMenuList>


        <NavigationMenuItem>
          <Link to={"/BBBB"} >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to={"/home"} >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  to={"/settings"}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    </div>
  )
}
 
type ListItemProps = LinkProps & {
  title: string;
  className?: string;
  children:React.ReactNode
};

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  ListItemProps
>(({ title,className, children,to, ...props }, ref) => {
  return (
    <li>
      <Link
        to={to}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default ListItem;



        // <NavigationMenuItem>
        //   <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        //   <NavigationMenuContent>
        //     <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        //       <li className="row-span-3">
        //         <div>
        //           <a
        //             className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
        //             href="/"
        //           >
    
        //             <div className="mb-2 mt-4 text-lg font-medium">
        //               shadcn/ui
        //             </div>
        //             <p className="text-sm leading-tight text-muted-foreground">
        //               Beautifully designed components that you can copy and
        //               paste into your apps. Accessible. Customizable. Open
        //               Source.
        //             </p>
        //           </a>
        //         </div>
        //       </li>
        //       <ListItem to={"/CCCC"} title="Introduction">
        //         Re-usable components built using Radix UI and Tailwind CSS.
        //       </ListItem>
        //       <ListItem to={"/CCCC"} title={"Introduction"}>
        //         How to install dependencies and structure your app.
        //       </ListItem>
        //       <ListItem to={"/CCCC"} title="Introduction">
        //         Styles for headings, paragraphs, lists...etc
        //       </ListItem>
        //     </ul>
        //   </NavigationMenuContent>
        // </NavigationMenuItem>