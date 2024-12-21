import { MeetingResponseDTOList } from "@/api/model"
import { Card } from "@/common/components/Card"
import { useNavigate } from "@tanstack/react-router"

interface MeetingList{
    meetings:MeetingResponseDTOList,

}


export const MeetingList = ({meetings}:MeetingList) => {
  console.log("MeetingLIst")
    const navigate = useNavigate({ from: '/meetings' })
    const clickHandlerCreator=(meetingId:number)=>()=>{
        
        console.log("AAAAA",meetingId)
        navigate({to:`/meetings/${meetingId}`})
    }



  return (
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            
            {
                meetings?.results.map(x => 
                    <Card key={x.id} header={x.title} content={x.id} clickEvent={clickHandlerCreator(x.id)}></Card>
                )
            }
            
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
  )
}
