start:
	npx expo start -c --tunnel

build-local:
	npx expo prebuild

dev-build-android:
	npx expo run:android

start-ios:
	npx expo run:ios

start-android:
	npx expo run:android

build:
	eas build:configure