import {chatListProps} from '../interface';
import {ItemCode_AlertType} from '../../enums/enums';
export const chatList : chatListProps[] = [
    {
        id : ItemCode_AlertType.Critical,
        name : "Critical",
        lastMessage : "Mortality over 60 %",
        profilePic : require("../../../assets/alarm.png"),
        lastSeen : "11:36 PM"
    },
    {
        id : ItemCode_AlertType.Immediate,
        name : "Immediate",
        lastMessage : "Mortality over 50 %",
        profilePic : require("../../../assets/siren.png"),
        lastSeen : "10:36 PM"
    },
    {
        id : ItemCode_AlertType.Warning,
        name : "Warning",
        lastMessage :"Mortality over 30 %",
        profilePic:require("../../../assets/warning.png"),
        lastSeen : "09:36 PM"
    },
    {
        id : ItemCode_AlertType.Success,
        name : "Success",
        lastMessage :"Mortality over 3 %",
        profilePic:require("../../../assets/check.png"),
        lastSeen : "08:36 PM"
    },
    {
        id : ItemCode_AlertType.Information,
        name : "Information",
        lastMessage : "Mortality over 10 %",
        profilePic:require("../../../assets/info.png"),
        lastSeen : "07:36 PM"
    },
    {
        id : ItemCode_AlertType.InformationSuccess,
        name : "Information Success",
        lastMessage : "Mortality over 3 %",
        profilePic:require("../../../assets/check_info.png"),
        lastSeen : "06:36 PM"
    }
]