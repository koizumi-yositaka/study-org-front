import { MeetingResponseDTO, MeetingResponseDTOList } from "@/api/model"
import { 
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
 } from "@/components/ui/card"
import { ContentCard } from "@/common/components/ContentCard"
import { useNavigate } from "@tanstack/react-router"
import { TestButton } from "@/common/components/TestButton"

interface MeetingList{
    meetings:MeetingResponseDTOList,

}


export const MeetingList = ({meetings}:MeetingList) => {
  console.log("MeetingLIst")
    

  return (
        <div className='space-y-6'>
          
            
            {
                meetings?.results.map(x => 
                    //<Card key={x.id} header={x.title} content={x.id} clickEvent={clickHandlerCreator(x.id)}></Card>
                    <MeetingItem key={x.id} meetingDTO={x}></MeetingItem>
                  )
            }
          
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
  )
}

interface MeetingItemProp{
  meetingDTO:MeetingResponseDTO
}

const MeetingItem = ({meetingDTO}:MeetingItemProp)=>{
    const navigate = useNavigate({ from: '/meetings' })
    const clickHandlerCreator=(meetingId:number)=>()=>{
        
        console.log("AAAAA",meetingId)
        navigate({to:`/meetings/${meetingId}`})
    }
  return(
          <Card>
            <CardHeader className="h-4">
                <CardTitle>{meetingDTO.title} {meetingDTO.eventDate}</CardTitle>
                {/* <CardDescription>{props.cardDescription}</CardDescription> */}
            </CardHeader>
            <CardContent>
                <p>{meetingDTO.detail}</p>
            </CardContent>
            <CardFooter>
                <TestButton type={"button"} variant={"primary"} onClick={clickHandlerCreator(meetingDTO.id)}>GO</TestButton>
            </CardFooter>
        </Card>
  )

}