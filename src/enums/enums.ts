export enum ColorThemes  {
    PRIMARY='#128C7E', PRIMARY_DARK='#075E54', SECONDARY_LIGHT='#25D366', SECONDARY_BLUE='#34B7F1'
}
export enum Colors {
    White = 'white', Lightgray = 'lightgray', EEEEEE = '#EEEEEE', Black = '#000',VetSoft='#8DC73F', 
    ZeroZero7aff = '#007aff', Red = 'red', Gray = 'gray', Green="green", Darkgreen = "darkgreen",
    Lightgreen ='lightgreen', ExtraLightGreen='#d1ffb3'
}
export enum Lang  { AR = 1, EN = 2 }
export enum FontWeight  { Normal="normal", Bold = "bold" }
export enum FontStyles   { Normal="normal", Italic = "italic" }
export enum FontSize   { Small = 12, Normal= 16, Medium = 22, Large = 26,ExtraLarge = 30 }
export enum FontFamily { Monospace = 'Monospace'}
export enum PasswordConstraints { MinLength = 8 }
export enum ItemCode_AlertType { 
    Critical = 10001,Immediate = 10002, Warning = 10003, Success = 10004, Information = 10005,
	InformationSuccess = 10006
 }
 export enum IconName {
    Message_Square="message-square", Lock = 'lock', User = 'user', Call_Made = "call_made",
    Call_Sharp = "call-sharp", Arrow_Left = "arrow-left" , Settings="settings", Login = "log-in",
    Logout = "log-out", Globe = "globe", TextHeight = "text-height"
 }
 export enum IconType { 
     Feather = "feather", Material = "material", Ionicon = "ionicon",FontAwesome="font-awesome"
}
 export enum Platforms { IOS = 'ios', Android = 'android' }
 export enum Screens {
     Chats = "Chats",Chat="Chat", Splash="Splash",Login="Login",Setting="Setting", Profile="Profile" ,
}
 export enum KeyAsyncStorage { User = "user", Lang = 'lang' }
 export enum RequestStatus { Ok = 200 }