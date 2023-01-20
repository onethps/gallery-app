import React, {useState} from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

import DropDownPicker from 'react-native-dropdown-picker';
import {ArrowLeft, SettingsIcon} from '../constants/icons';
import {colors, sizes} from '../constants/themes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

export const FavoriteScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const animatedIndex = useSharedValue(200);
  const border = useSharedValue(20);

  const buttonStyles = useAnimatedStyle(() => ({
    width: withTiming(animatedIndex.value, {duration: 500}),
    borderRadius: withTiming(border.value, {duration: 500}),
    marginBottom: withSpring(border.value === 0 ? 0 : 20, {duration: 500}),
  }));

  const insets = useSafeAreaInsets();
  const nav = useNavigation();
  console.log(border.value);
  return (
    <KeyboardAvoidingView
      style={[styles.container]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.mainView}>
        <TouchableOpacity
          style={[styles.backButton, {marginTop: insets.top}]}
          onPress={() => nav.navigate('Home')}>
          <ArrowLeft color={'black'} />
        </TouchableOpacity>
        <View style={styles.textContent}>
          <Text
            style={styles.headerText}
            onPress={() => {
              animatedIndex.value = 200;
              border.value = 20;
              return Keyboard.dismiss();
            }}>
            Ласкаво просимо
          </Text>
          <Text style={styles.bodyText}>
            Для початку роботи у системі вкажіть номер телефону
          </Text>
        </View>
        <View style={styles.numberInputContainer}>
          <View style={styles.countryCodeInput}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              stickyHeader
            />
          </View>
          <View style={styles.fullNumberContainer}>
            <View style={styles.iconContainer}>
              <SettingsIcon color={colors.primary} width={18} height={18} />
            </View>
            <TextInput
              onPressIn={() => {
                animatedIndex.value = sizes.width;
                border.value = 0;
                console.log(animatedIndex.value);
              }}
              placeholder="(096) 666 3344"
              keyboardType="number-pad"
            />
          </View>
        </View>
      </View>
      <View style={[styles.footer]}>
        <Animated.View style={[styles.buttonStyle, buttonStyles]}>
          <Button title="Продовжити" />
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5E7F4',
    paddingHorizontal: 15,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.third,
  },
  textContent: {
    marginVertical: 50,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 30,
    marginBottom: 20,
  },
  bodyText: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 50,
  },
  numberInputContainer: {
    flexDirection: 'row',
    gap: 11,
  },
  countryCodeInput: {
    width: sizes.width / 2 / 2,
  },

  fullNumberContainer: {
    flexGrow: 1,
    maxWidth: 245,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    gap: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBEEF5',
  },
  input: {},
  dropdown: {},
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    maxHeight: 60,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1D3157',
    paddingHorizontal: 31,
    paddingVertical: 12,
    borderRadius: 20,
    flexGrow: 1,
  },
});
