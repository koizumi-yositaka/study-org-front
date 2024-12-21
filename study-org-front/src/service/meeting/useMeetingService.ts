import { useReserveMeeting } from "@/api/endpoints/testGen";

export const useMeetingService=()=>{
    const callReserveMeeting=()=>{
          return useReserveMeeting({
            mutation:{
            onSuccess: (data) => {
            console.log('Login success:', data);
            },
            onError: (error) => {
            console.error('Login error:', error);
            },
        }});
    }

    return {callReserveMeeting}
}