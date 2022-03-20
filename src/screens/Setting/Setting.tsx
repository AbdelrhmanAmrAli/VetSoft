import React from "react";
import {View} from 'react-native';
import { IconName, IconType, Lang } from "../../enums/enums";
import Box from '../components/Box';
import I18n from "../../Resources/Resource";
import { SettingsComponent } from "../components/SettingsComponent";
//-----------------------------------------
const languages = [
  {label : 'Arabic'/*I18n.t('Arabic')*/ , id: Lang.AR },
  {label : 'English'/*I18n.t('English')*/ , id: Lang.EN }
];


const Setting = () => {
  
  const SettingsOptions = [
    {title:I18n.t('Language'),  IconName:IconName.Globe,IconType:IconType.Feather, onPress : () => {}},
    {title:I18n.t("ColorThemes"), IconName:IconName.Settings,IconType:IconType.Feather, onPress : () => {}},
    {title:I18n.t("FontSize"), IconName:IconName.TextHeight,IconType:IconType.FontAwesome, onPress : () => {}},
    {title:I18n.t("FontStyle"), IconName:IconName.Settings,IconType:IconType.Feather, onPress : () => {}}
  ];

  return (
  //   <View style={Settings.background}>
  //   <Box name={I18n.t('Language')} Items={languages}  IconName = {IconName.Globe}/>
  //   {/* <Box name={I18n.t('Language')}  Flabel="english" Slabel = "Arabic" IconName = {IconName.Globe}/> */}
  //   {/* <Box name="Theme"  Flabel="Theme1" Slabel = "Theme2" />
  //   <Box name="Font"  Flabel="Font1" Slabel = "Font2" />
  //   <Box name="FontSize"  Flabel="FontSize1" Slabel = "FontSize2" /> */}
  // </View>
  <SettingsComponent SettingsOptions={SettingsOptions}/>
  );
  }

//-----------------------------------------
export  {Setting};
//-----------------------------------------