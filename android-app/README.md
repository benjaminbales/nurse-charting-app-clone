# Nurse Charting Android App

## Setup

This project was initialized without the Gradle Wrapper binaries. You need to generate them before running the project.

### Prerequisites
- Java Development Kit (JDK) 11 or higher.
- Android SDK.
- Gradle installed globally (or use Android Studio).

### Generating Gradle Wrapper

1. Open a terminal in this directory (`android-app`).
2. Run the following command to generate the wrapper files:
   ```bash
   gradle wrapper
   ```
   If you don't have `gradle` installed globally, you can open this project in **Android Studio**, and it should prompt you to fix the Gradle wrapper or generate it for you.

### Running the App

Once the wrapper is generated, you can run the app using:

```bash
./gradlew installDebug
```

Or simply run it from Android Studio.
