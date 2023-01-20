import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

export const DetailsBottomCard = () => {
  const bottomSheetRef = React.useRef(null);

  const snapPoints = React.useMemo(() => ['25%', '50%'], []);

  // renders
  const renderBackdrop = React.useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={2}
        appearsOnIndex={2}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}>
      <View style={styles.container}>
        <Text>DetailsBottomCard</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
