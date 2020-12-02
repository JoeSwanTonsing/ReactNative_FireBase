import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  AdEventType,
  RewardedAdEventType,
  BannerAdSize,
} from '@react-native-firebase/admob';

export default function AdMobScreen() {
  useEffect(() => {
    let interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['fashion', 'clothing'],
    });
    let interstitialListener = interstitial.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        //setLoaded(true);
        interstitial.show();
      }
    });
    interstitial.load();
    return () => {
      interstitialListener = null;
    };
  }, []);

  function loadRewardedAD() {
    let rewardAd = RewardedAd.createForAdRequest(TestIds.REWARDED, {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['fashion', 'clothing'],
    });
    let rewardAdListener = rewardAd.onAdEvent((type, error, reward) => {
      if (type === RewardedAdEventType.LOADED) {
        rewardAd.show();
      }
      if (type === RewardedAdEventType.EARNED_REWARD) {
        alert('Earned ' + reward);
      }
    });
    rewardAd.load();
    return () => {
      rewardAdListener = null;
    };
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Admob screen</Text>
        <Text>
          Rewarded AD as the name implies, rewards you for watching the ad. Can
          be invoked as a function call from button event, etc, or similar to
          Interstitial Ad, on component mount.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => loadRewardedAD()}>
          <Text style={styles.buttonText}>Load REWARDED AD</Text>
        </TouchableOpacity>
        <Text>
          {'\n\n'}
          Interstitial Ad is displayed on the load of the screen, when the
          component mounts. Use the close button to close the app.
        </Text>
        <Text>
          {'\n\n'}
          Banner Ad is displayed on the bottom of the screen - Permanently
        </Text>
      </View>
      <View style={styles.footer}>
        <BannerAd size={BannerAdSize.SMART_BANNER} unitId={TestIds.BANNER} />
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    padding: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: 'coral',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 15,
    padding: 15,
    backgroundColor: '#32a7e6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
};
