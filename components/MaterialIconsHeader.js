import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../styles/Colors'

import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const MaterialIconsHeader = (props) => {
  return (
    <HeaderButton IconComponent={SimpleLineIcons} iconSize={23} {...props} />
  )
}

export default MaterialIconsHeader

const styles = StyleSheet.create({})