import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {

    const totalQuestions = 20;
    const [isQuizStarted, setIsQuizStarted] = useState(false); // Track whether the quiz has started
    const [quizStep, setQuizStep] = useState(0); // Track the current quiz step
    const [cloudStorage, setCloudStorage] = useState(0); // User input for cloud storage slider
    const [backupFrequency, setBackupFrequency] = useState(0); // User input for backup frequency slider
    const [deviceCount, setDeviceCount] = useState(0); // User input for devices automatically backing up
    const [streamingHours, setStreamingHours] = useState(0); // User input for streaming hours slider
    const [streamingQuality, setStreamingQuality] = useState("");
    const [backgroundAudioFreq, setBackgroundAudioFreq] = useState(0);
    const [socialMediaHours, setSocialMediaHours] = useState(0);
    const [uploadFrequency, setUploadFrequency] = useState(0);
    const [socialMediaAccounts, setSocialMediaAccounts] = useState(0);
    const [gamingHours, setGamingHours] = useState(0);
    const [energyIntensiveDevices, setEnergyIntensiveDevices] = useState("");
    const [energySavingFreq, setEnergySavingFreq] = useState(0);
    const [videoCallHours, setVideoCallHours] = useState(0);
    const [cameraUsageFreq, setCameraUsageFreq] = useState(0);
    const [passiveParticipation, setPassiveParticipation] = useState(0);
    const [connectedDevices, setConnectedDevices] = useState(0);
    const [overnightCharging, setOvernightCharging] = useState(0);
    const [deviceEnergySaving, setDeviceEnergySaving] = useState(0);
    const [onlineShoppingFreq, setOnlineShoppingFreq] = useState(0);
    const [liveShoppingEvents, setLiveShoppingEvents] = useState(0);
    const [activeResult, setActiveResult] = useState("Results"); // Set 'Results' as default
    const navOptions = ["Results", "Statistics", "Solutions", "Works Cited"];

    const progressPercentage = ((quizStep + 1) / totalQuestions) * 100;

    

    const startQuiz = () => {
        setIsQuizStarted(true); // Start the quiz
    };

    const handleNext = () => {
        if (quizStep < totalQuestions - 1) {
            setQuizStep((prev) => prev + 1); // Move to the next quiz step
        } else {
            setQuizStep("results"); // Go to the results page
        }
    };

    const handleBack = () => {
        setQuizStep((prev) => (prev > 0 ? prev - 1 : 0)); // Move back to the previous quiz step
    };

    const getStorageLabel = () => {
        if (cloudStorage <= 25) return "0-50 GB";
        if (cloudStorage <= 50) return "50-100 GB";
        if (cloudStorage <= 75) return "100-500 GB";
        return ">500 GB";
    };

    const getStorageCaption = () => {
        if (cloudStorage <= 25) return "(Literally doesn’t take any pictures)";
        if (cloudStorage <= 50) return "(Occasionally uploads files or photos)";
        if (cloudStorage <= 75) return "(Uses cloud for regular backups)";
        return "(Has a huge collection of photos, videos, or data)";
    };

    const getBackupFrequencyLabel = () => {
        if (backupFrequency <= 25) return "Rarely";
        if (backupFrequency <= 50) return "Occasionally";
        return "Frequently";
    };

    const getBackupFrequencyCaption = () => {
        if (backupFrequency <= 25) return "(Backs up data roughly once a month)";
        if (backupFrequency <= 50) return "(Backs up data about once a week)";
        return "(Backs up data almost daily)";
    };
    

    const getDeviceCountLabel = () => {
        if (deviceCount <= 25) return "0 devices";
        if (deviceCount <= 50) return "1-2 devices";
        return "3+ devices";
    };

    const getDeviceCountCaption = () => {
        if (deviceCount <= 33) return "(No devices automatically backing up)";
        if (deviceCount <= 66) return "(A few devices regularly back up to the cloud)";
        return "(Multiple devices automatically backing up to the cloud)";
    };

    const getStreamingHoursLabel = () => {
        if (streamingHours <= 25) return "0-10 hours";
        if (streamingHours <= 50) return "10-20 hours";
        if (streamingHours <= 75) return "20-30 hours";
        return "30-40+ hours";
    };
    
    const getStreamingHoursCaption = () => {
        if (streamingHours <= 25) return "(Occasional viewer)";
        if (streamingHours <= 50) return "(Regular viewer)";
        if (streamingHours <= 75) return "(Frequent streamer)";
        return "(Binge streamer)";
    };

    const getBackgroundAudioLabel = () => {
        if (backgroundAudioFreq <= 33) return "Never";
        if (backgroundAudioFreq <= 66) return "Occasionally";
        return "Frequently";
    };
    
    const getBackgroundAudioCaption = () => {
        if (backgroundAudioFreq <= 33) return "(Rarely or never plays in the background)";
        if (backgroundAudioFreq <= 66) return "(Sometimes turns on music or podcasts in the background)";
        return "(Almost always has something playing without actively listening)";
    };

    const getSocialMediaHoursLabel = () => {
        if (socialMediaHours <= 25) return "0–2 hours";
        if (socialMediaHours <= 50) return "2–4 hours";
        if (socialMediaHours <= 75) return "4–6 hours";
        return "6+ hours";
    };
    
    const getSocialMediaHoursCaption = () => {
        if (socialMediaHours <= 25) return "(Barely checks in)";
        if (socialMediaHours <= 50) return "(Moderate user)";
        if (socialMediaHours <= 75) return "(Heavy scroller)";
        return "(Practically lives on social media)";
    };

    const getUploadFrequencyLabel = () => {
        if (uploadFrequency <= 25) return "Rarely";
        if (uploadFrequency <= 50) return "Monthly";
        if (uploadFrequency <= 75) return "Weekly";
        return "Daily";
    };
    
    const getUploadFrequencyCaption = () => {
        if (uploadFrequency <= 25) return "(Hardly ever posts)";
        if (uploadFrequency <= 50) return "(Posts occasionally each month)";
        if (uploadFrequency <= 75) return "(Engages at least once a week)";
        return "(Active contributor almost every day)";
    };
    
    const getSocialMediaAccountsLabel = () => {
        if (socialMediaAccounts <= 25) return "1–2 accounts";
        if (socialMediaAccounts <= 50) return "3–5 accounts";
        if (socialMediaAccounts <= 75) return "6–10 accounts";
        return "10+ accounts";
    };
    
    const getSocialMediaAccountsCaption = () => {
        if (socialMediaAccounts <= 25) return "(Keeps it simple)";
        if (socialMediaAccounts <= 50) return "(A few platforms to stay connected)";
        if (socialMediaAccounts <= 75) return "(Active on many platforms)";
        return "(Social media power user!)";
    };
    const getGamingHoursLabel = () => {
        if (gamingHours <= 25) return "0–5 hours";
        if (gamingHours <= 50) return "5–10 hours";
        if (gamingHours <= 75) return "10–20 hours";
        return "20+ hours";
    };
    
    const getGamingHoursCaption = () => {
        if (gamingHours <= 25) return "(Casual player)";
        if (gamingHours <= 50) return "(Moderate gamer)";
        if (gamingHours <= 75) return "(Enthusiast)";
        return "(Hardcore gamer)";
    };

    const getEnergySavingLabel = () => {
        if (energySavingFreq <= 33) return "Never";
        if (energySavingFreq <= 66) return "Sometimes";
        return "Always";
    };
    
    const getEnergySavingCaption = () => {
        if (energySavingFreq <= 33) return "(Never bothers with energy-saving settings)";
        if (energySavingFreq <= 66) return "(Occasionally enables energy-saving features)";
        return "(Consistently uses energy-saving settings)";
    };

    const getVideoCallHoursLabel = () => {
        if (videoCallHours <= 25) return "0–5 hours";
        if (videoCallHours <= 50) return "5–10 hours";
        if (videoCallHours <= 75) return "10–15 hours";
        return "15+ hours";
    };
    
    const getVideoCallHoursCaption = () => {
        if (videoCallHours <= 25) return "(Minimal virtual meetings)";
        if (videoCallHours <= 50) return "(Moderate online presence)";
        if (videoCallHours <= 75) return "(Regular attendee of online calls)";
        return "(Highly dependent on virtual meetings)";
    };
    const getCameraUsageLabel = () => {
        if (cameraUsageFreq <= 33) return "Never";
        if (cameraUsageFreq <= 66) return "Sometimes";
        return "Always";
    };
    
    const getCameraUsageCaption = () => {
        if (cameraUsageFreq <= 33) return "(Rarely or never uses camera)";
        if (cameraUsageFreq <= 66) return "(Occasionally turns the camera on)";
        return "(Consistently on camera)";
    };    
    const getPassiveParticipationLabel = () => {
        if (passiveParticipation <= 33) return "Never";
        if (passiveParticipation <= 66) return "Occasionally";
        return "Frequently";
    };
    
    const getPassiveParticipationCaption = () => {
        if (passiveParticipation <= 33) return "(Always engaged or leaves calls if not involved)";
        if (passiveParticipation <= 66) return "(Sometimes stays in calls without active input)";
        return "(Often present in calls without contributing)";
    };
    const getConnectedDevicesLabel = () => {
        if (connectedDevices <= 25) return "1–3 devices";
        if (connectedDevices <= 50) return "4–6 devices";
        if (connectedDevices <= 75) return "7–10 devices";
        return "10+ devices";
    };
    
    const getConnectedDevicesCaption = () => {
        if (connectedDevices <= 25) return "(Minimal connected lifestyle)";
        if (connectedDevices <= 50) return "(Moderately connected home)";
        if (connectedDevices <= 75) return "(Highly connected environment)";
        return "(Extremely connected, multiple smart devices)";
    };
    const getOvernightChargingLabel = () => {
        if (overnightCharging <= 33) return "Never";
        if (overnightCharging <= 66) return "Sometimes";
        return "Always";
    };
    
    const getOvernightChargingCaption = () => {
        if (overnightCharging <= 33) return "(Rarely or never wastes energy overnight)";
        if (overnightCharging <= 66) return "(Occasionally left on or charging unnecessarily)";
        return "(Devices frequently left on or charging overnight)";
    };
    const getDeviceEnergySavingLabel = () => {
        if (deviceEnergySaving <= 33) return "Never";
        if (deviceEnergySaving <= 66) return "Sometimes";
        return "Always";
    };
    
    const getDeviceEnergySavingCaption = () => {
        if (deviceEnergySaving <= 33) return "(Rarely or never uses energy-saving features)";
        if (deviceEnergySaving <= 66) return "(Occasionally uses low-power settings)";
        return "(Consistently uses energy-saving modes)";
    };
    const getOnlineShoppingLabel = () => {
        if (onlineShoppingFreq <= 33) return "Rarely (monthly)";
        if (onlineShoppingFreq <= 66) return "Occasionally (weekly)";
        return "Frequently (multiple times a week)";
    };
    
    const getOnlineShoppingCaption = () => {
        if (onlineShoppingFreq <= 33) return "(Minimal online purchases)";
        if (onlineShoppingFreq <= 66) return "(Steady online shopper)";
        return "(Frequent online buyer)";
    };
    const getLiveShoppingLabel = () => {
        if (liveShoppingEvents <= 33) return "Never";
        if (liveShoppingEvents <= 66) return "Occasionally";
        return "Always";
    };
    
    const getLiveShoppingCaption = () => {
        if (liveShoppingEvents <= 33) return "(Never watches live online shopping events)";
        if (liveShoppingEvents <= 66) return "(Sometimes tunes in for special events)";
        return "(Regularly streams live shopping sessions)";
    };

    // Cloud Storage (GB)
const getCloudStorageMidpoint = () => {
    if (cloudStorage <= 25) return 25;   // 0–50 GB → ~25 GB
    if (cloudStorage <= 50) return 75;   // 50–100 GB → ~75 GB
    if (cloudStorage <= 75) return 300;  // 100–500 GB → ~300 GB
    return 750;                          // >500 GB → ~750 GB
};

// Backup Frequency (Times/Month)
const getBackupFrequencyValue = () => {
    if (backupFrequency <= 25) return 1;   // Rarely → ~1 time/month
    if (backupFrequency <= 50) return 4;   // Occasionally → ~4 times/month
    return 30;                             // Frequently → ~30 times/month
};

// Device Count (Number of Devices)
const getDeviceCountValue = () => {
    if (deviceCount <= 25) return 0;       // 0 devices
    if (deviceCount <= 50) return 2;       // 1–2 devices
    return 4;                              // 3+ devices
};

// Streaming Hours (Hours/Week)
const getStreamingHoursValue = () => {
    if (streamingHours <= 25) return 5;    // 0–10 hours → ~5 hours
    if (streamingHours <= 50) return 15;   // 10–20 hours → ~15 hours
    if (streamingHours <= 75) return 25;   // 20–30 hours → ~25 hours
    return 35;                             // 30–40+ hours → ~35 hours
};

// Background Audio Usage (Hours/Week)
const getBackgroundAudioValue = () => {
    if (backgroundAudioFreq <= 33) return 0;   // Never
    if (backgroundAudioFreq <= 66) return 7;   // Occasionally → ~7 hours
    return 14;                                 // Frequently → ~14 hours
};

// Social Media Hours (Hours/Day)
const getSocialMediaHoursValue = () => {
    if (socialMediaHours <= 25) return 1;      // 0–2 hours → ~1 hour
    if (socialMediaHours <= 50) return 3;      // 2–4 hours → ~3 hours
    if (socialMediaHours <= 75) return 5;      // 4–6 hours → ~5 hours
    return 8;                                  // 6+ hours → ~8 hours
};

// Upload Frequency (Files/Week)
const getUploadFrequencyValue = () => {
    if (uploadFrequency <= 25) return 1;       // Rarely → ~1 upload/week
    if (uploadFrequency <= 50) return 4;       // Monthly → ~4 uploads/week
    if (uploadFrequency <= 75) return 10;      // Weekly → ~10 uploads/week
    return 30;                                 // Daily → ~30 uploads/week
};

// Social Media Accounts
const getSocialMediaAccountsValue = () => {
    if (socialMediaAccounts <= 25) return 2;   // 1–2 accounts
    if (socialMediaAccounts <= 50) return 4;   // 3–5 accounts
    if (socialMediaAccounts <= 75) return 8;   // 6–10 accounts
    return 12;                                 // 10+ accounts
};

// Gaming Hours (Hours/Week)
const getGamingHoursValue = () => {
    if (gamingHours <= 25) return 3;           // 0–5 hours → ~3 hours
    if (gamingHours <= 50) return 8;           // 5–10 hours → ~8 hours
    if (gamingHours <= 75) return 15;          // 10–20 hours → ~15 hours
    return 25;                                 // 20+ hours → ~25 hours
};

// Energy Intensive Devices (Yes/No)
const getEnergyIntensiveDevicesValue = () => {
    return energyIntensiveDevices === "Yes" ? 150 : 0; // ~150 kWh if "Yes"
};

// Energy Saving Frequency (% Reduction)
const getEnergySavingReduction = () => {
    return energySavingFreq > 50 ? 0.9 : 1; // Apply 10% savings if >50
};

// Video Call Hours (Hours/Week)
const getVideoCallHoursValue = () => {
    if (videoCallHours <= 25) return 2;        // 0–5 hours → ~2 hours
    if (videoCallHours <= 50) return 7;        // 5–10 hours → ~7 hours
    if (videoCallHours <= 75) return 12;       // 10–15 hours → ~12 hours
    return 20;                                 // 15+ hours → ~20 hours
};

// Camera Usage Frequency (Hours/Week)
const getCameraUsageValue = () => {
    if (cameraUsageFreq <= 33) return 2;       // Never → ~2 hours
    if (cameraUsageFreq <= 66) return 6;       // Sometimes → ~6 hours
    return 10;                                 // Always → ~10 hours
};

// Passive Participation (Hours/Week)
const getPassiveParticipationValue = () => {
    if (passiveParticipation <= 33) return 0;  // Never
    if (passiveParticipation <= 66) return 5;  // Occasionally → ~5 hours
    return 10;                                 // Frequently → ~10 hours
};

// Connected Devices (Number of Devices)
const getConnectedDevicesValue = () => {
    if (connectedDevices <= 25) return 2;      // 1–3 devices
    if (connectedDevices <= 50) return 5;      // 4–6 devices
    if (connectedDevices <= 75) return 8;      // 7–10 devices
    return 12;                                 // 10+ devices
};

// Overnight Charging (Hours/Night)
const getOvernightChargingValue = () => {
    if (overnightCharging <= 33) return 0;     // Never
    if (overnightCharging <= 66) return 4;     // Sometimes → ~4 hours/night
    return 8;                                  // Always → ~8 hours/night
};

// Online Shopping Frequency (Orders/Week)
const getOnlineShoppingValue = () => {
    if (onlineShoppingFreq <= 33) return 1;    // Rarely → ~1 order/week
    if (onlineShoppingFreq <= 66) return 3;    // Occasionally → ~3 orders/week
    return 5;                                  // Frequently → ~5 orders/week
};

// Live Shopping Events (Hours/Week)
const getLiveShoppingValue = () => {
    if (liveShoppingEvents <= 33) return 0;    // Never
    if (liveShoppingEvents <= 66) return 2;    // Occasionally → ~2 hours/week
    return 5;                                  // Always → ~5 hours/week
};


const energyConstants = {
    streaming: 0.15,        // kWh per hour
    socialMedia: 0.15,      // kWh per hour
    gaming: 0.3,            // kWh per hour
    cloudStorage: 3,        // kWh per GB annually
    videoCalls: 0.07,       // kWh per hour
    deviceUsage: 5,         // kWh per device annually
    overnightCharging: 1.25,  // kWh per device per night
    onlineShopping: 1.0,    // kWh per event
};

const emissionsFactor = 0.5; // kg CO2 per kWh


const calculateTotalEnergyAndCO2 = () => {
    const energySavingFactor = getEnergySavingReduction();

    const cloudAnnual = getCloudStorageMidpoint() * energyConstants.cloudStorage;
    const backupAnnual = getBackupFrequencyValue() * energyConstants.videoCalls;
    const deviceUsageAnnual = getDeviceCountValue() * energyConstants.deviceUsage;
    const streamingAnnual = getStreamingHoursValue() * 52 * energyConstants.streaming;
    const backgroundAudioAnnual = getBackgroundAudioValue() * 52 * energyConstants.streaming * 0.5;
    const socialMediaAnnual = getSocialMediaHoursValue() * 365 * energyConstants.socialMedia;
    const uploadAnnual = getUploadFrequencyValue() * energyConstants.onlineShopping;
    const gamingAnnual = getGamingHoursValue() * 52 * energyConstants.gaming;
    const videoCallsAnnual = getVideoCallHoursValue() * 52 * energyConstants.videoCalls;
    const cameraUsageAnnual = getCameraUsageValue() * 52 * energyConstants.videoCalls * 0.8;
    const passiveAnnual = getPassiveParticipationValue() * 52 * energyConstants.videoCalls * 0.5;
    const connectedDevicesAnnual = getConnectedDevicesValue() * energyConstants.deviceUsage;
    const overnightChargingAnnual = getOvernightChargingValue() * 365 * energyConstants.overnightCharging;
    const shoppingAnnual = getOnlineShoppingValue() * 52 * energyConstants.onlineShopping;
    const liveShoppingAnnual = getLiveShoppingValue() * 52 * energyConstants.streaming;
    const socialMediaAccountsAnnual = getSocialMediaAccountsValue() * 5; // 5 kWh per account annually
    const energyIntensiveDevicesAnnual = getEnergyIntensiveDevicesValue();

    let totalEnergy = (
        cloudAnnual +
        backupAnnual +
        deviceUsageAnnual +
        streamingAnnual +
        backgroundAudioAnnual +
        socialMediaAnnual +
        uploadAnnual +
        gamingAnnual +
        videoCallsAnnual +
        cameraUsageAnnual +
        passiveAnnual +
        connectedDevicesAnnual +
        overnightChargingAnnual +
        shoppingAnnual +
        liveShoppingAnnual +
        socialMediaAccountsAnnual + // Included
        energyIntensiveDevicesAnnual // Included
    ) * energySavingFactor;

    const totalCO2 = totalEnergy * emissionsFactor;

    return { totalEnergy, totalCO2 };
};
        
const calculateCategoryStats = () => {
    return [
        {
            category: "Streaming and Media",
            energy: getStreamingHoursValue() * 52 * energyConstants.streaming,
            emissions: getStreamingHoursValue() * 52 * energyConstants.streaming * emissionsFactor,
        },
        {
            category: "Social Media & Online Activity",
            energy: getSocialMediaHoursValue() * 365 * energyConstants.socialMedia +
                    getSocialMediaAccountsValue() * 5, // Add accounts energy
            emissions: (getSocialMediaHoursValue() * 365 * energyConstants.socialMedia +
                        getSocialMediaAccountsValue() * 5) * emissionsFactor,
        },
        {
            category: "Online Gaming",
            energy: getGamingHoursValue() * 52 * energyConstants.gaming,
            emissions: getGamingHoursValue() * 52 * energyConstants.gaming * emissionsFactor,
        },
        {
            category: "Cloud Storage",
            energy: getCloudStorageMidpoint() * energyConstants.cloudStorage,
            emissions: getCloudStorageMidpoint() * energyConstants.cloudStorage * emissionsFactor,
        },
        {
            category: "Video Calls",
            energy: getVideoCallHoursValue() * 52 * energyConstants.videoCalls,
            emissions: getVideoCallHoursValue() * 52 * energyConstants.videoCalls * emissionsFactor,
        },
        {
            category: "Device Usage & Charging",
            energy: getConnectedDevicesValue() * energyConstants.deviceUsage +
                    getOvernightChargingValue() * 365 * energyConstants.overnightCharging +
                    getEnergyIntensiveDevicesValue(), // Add energy-intensive devices
            emissions: (getConnectedDevicesValue() * energyConstants.deviceUsage +
                        getOvernightChargingValue() * 365 * energyConstants.overnightCharging +
                        getEnergyIntensiveDevicesValue()) * emissionsFactor,
        },
        {
            category: "Online Shopping",
            energy: getOnlineShoppingValue() * 52 * energyConstants.onlineShopping,
            emissions: getOnlineShoppingValue() * 52 * energyConstants.onlineShopping * emissionsFactor,
        },
        {
            category: "Live Shopping Events",
            energy: getLiveShoppingValue() * 52 * energyConstants.streaming,
            emissions: getLiveShoppingValue() * 52 * energyConstants.streaming * emissionsFactor,
        },
    ];
};



const { totalEnergy, totalCO2 } = calculateTotalEnergyAndCO2();
const categoryStats = calculateCategoryStats();

// Equivalent Impact
const carMiles = Math.round(totalCO2 / 0.25); // 0.25 kg CO₂ per mile
const flights = Math.round(totalCO2 / 150);   // 150 kg CO₂ per one-way flight
const trees = Math.round(totalCO2 / 21);      // 21 kg CO₂ offset per tree annually

    
    return (
        <div className= {`app-container ${
            !isQuizStarted ? 'front-page' :
            quizStep === 0 ? 'cloud-usage-page' : 
            quizStep === 1 ? 'cloud-usage-page' : 
            quizStep === 2 ? 'cloud-usage-page' : //cloud 

            quizStep === 3 ? 'streaming-page' : //streaming
            quizStep === 4 ? 'streaming-page' :
            quizStep === 5 ? 'streaming-page' : 

            quizStep === 6 ? 'social-media-page' : //social media
            quizStep === 7 ? 'social-media-page' : 
            quizStep === 8 ? 'social-media-page' :

            quizStep === 9 ? 'gaming-page' : //gaming 
            quizStep === 10 ? 'gaming-page' :
            quizStep === 11 ? 'gaming-page' : 

            quizStep === 12 ? 'video-call-page' : //video calls 
            quizStep === 13 ? 'video-call-page' : 
            quizStep === 14 ? 'video-call-page' :
            
            quizStep === 15 ? 'device-page' : //device usage
            quizStep === 16 ? 'device-page' : 
            quizStep === 17 ? 'device-page' :
            
            quizStep === 18 ? 'shopping-page' : //digital shopping
            quizStep === 19 ? 'shopping-page' :
            
            quizStep === 'results' ? 'result-page':''}`

    
            }>
            {!isQuizStarted ? (
                <>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}    // Starting state: invisible, moves up 50px
                    animate={{ opacity: 1, y: 0 }}     // End state: fully visible, at normal position
                    transition={{ duration: 1.0 }}     // Animation duration
                    className="text-container"
                >

                    <p style={{ fontSize: '1rem', color: '#2F4F4F', marginBottom: '1rem'  }}>
                        What's your 
                    </p>
                    <h1 style={{ fontSize: '4rem', margin: '0', color: '#2F4F4F', fontWeight: 'bold' }}>
                        Digital Footprint
                    </h1>
                    <p style={{ fontSize: '0.8rem', marginBottom: '0rem', color: '#2F4F4F', lineHeight: '1' }}>
                        How much of the internet's energy is yours?
                    </p>
                    <p style={{ fontSize: '0.8rem', marginBottom: '2rem', color: '#2F4F4F', lineHeight: '1' }}>
                        How much data do you really take up?
                    </p>
                        <motion.button
                            initial={{ opacity: 0, y: 50 }}   // Starting state: invisible, moves up 50px
                            animate={{ opacity: 1, y: 0 }}    // End state: fully visible, at normal position
                            transition={{ duration: 0.8, delay: 1.0 }} // Delay button animation by 1 second
                            whileHover={{ scale: 1.1 }}       // Slightly scale up on hover
                            whileTap={{ scale: 0.9 }}         // Slightly scale down on click
                            className="quiz-button"
                            onClick={startQuiz}
                        >                    
                            Take the First Step
                        </motion.button>
                </motion.div>
                </>
            ) : (
                <>{quizStep !== "results" && (
                    <div style={{
                        width: '100%',
                        background: '#EEE',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        marginBottom: '1rem',
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}>
                        <div style={{
                            width: `${progressPercentage}%`,
                            background: 'linear-gradient(to right, #0091ff, #0080ff)', // A gradient fill
                            height: '5px',            // Thicker bar
                            transition: 'width 0.2s ease',
                            borderRadius: '20px',      // Rounding matches the outer track for a capsule look
                        }}></div>
                    </div>
                )}

                <section style={{ width: '80%', textAlign: 'center' }}>
                    {quizStep === 0 && (
                        <>
                            {/* Title Transition */}
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }} // Start faded and shifted left
                                animate={{ opacity: 1, x: 0 }} // Animate to visible and centered
                                transition={{ duration: 0.8 }} // Animation duration
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Cloud Usage
                            </motion.h2>

                            {/* Question Transition */}
                            <motion.p
                                initial={{ opacity: 0, x: 50 }} // Start faded and shifted right
                                animate={{ opacity: 1, x: 0 }} // Animate to visible and centered
                                transition={{ duration: 1.0 }} // Animation duration
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How much data do you store in the cloud?
                            </motion.p>

                            {/* Slider and Labels Transition */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} // Start faded and shifted down
                                animate={{ opacity: 1, y: 0 }} // Animate to visible and its original position
                                transition={{ duration: 1.0, delay: 0.2 }} // Delay to appear after the question
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    {/* Left Label */}
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        No Data
                                    </span>

                                    {/* Slider */}
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={cloudStorage}
                                        onChange={(e) => setCloudStorage(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${cloudStorage}%, #EEE ${cloudStorage}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                        }}
                                    />

                                    {/* Right Label */}
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        A Disgusting Amount
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getStorageLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getStorageCaption()}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Buttons Transition */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.4 }} // Delay to appear after slider
                                style={{ marginTop: '1rem' }}
                            >
                                <button
                                    onClick={handleNext}
                                    className="quiz-button"
                                >
                                    Next
                                </button>
                            </motion.div>
                        </>
                    )}
                    {quizStep === 1 && (
                        <>
                            {/* Title with Transition */}
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }} // Start faded and shifted left
                                animate={{ opacity: 1, x: 0 }} // Animate to visible and centered
                                transition={{ duration: 0.8 }} // Animation duration
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Cloud Usage
                            </motion.h2>

                            {/* Question with Transition */}
                            <motion.p
                                initial={{ opacity: 0, x: 50 }} // Start faded and shifted right
                                animate={{ opacity: 1, x: 0 }} // Animate to visible and centered
                                transition={{ duration: 1.0 }} // Animation duration
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How often do you back up your data to the cloud?
                            </motion.p>

                            {/* Slider and Labels with Transition */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} // Start faded and shifted down
                                animate={{ opacity: 1, y: 0 }} // Animate to visible and its original position
                                transition={{ duration: 1.0, delay: 0.3 }} // Delay to appear after the question
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '60%',
                                    }}
                                >
                                    {/* Left Label */}
                                    <span
                                        style={{
                                            fontSize: '1rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            flex: '0 0 120px', // Fixed width for consistency
                                            textAlign: 'center',
                                        }}
                                    >
                                        Rarely
                                    </span>

                                    {/* Slider */}
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={backupFrequency}
                                        onChange={(e) => setBackupFrequency(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${backupFrequency}%, #EEE ${backupFrequency}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                            transition: 'background 0.3s ease',
                                        }}
                                    />

                                    {/* Right Label */}
                                    <span
                                        style={{
                                            fontSize: '1rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            flex: '0 0 120px', // Fixed width for consistency
                                            textAlign: 'center',
                                        }}
                                    >
                                        Frequently
                                    </span>
                                </div>

                                {/* Slider Captions */}
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p
                                        style={{
                                            fontSize: '1.2rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            marginBottom: '0',
                                        }}
                                    >
                                        {getBackupFrequencyLabel()}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '0.9rem',
                                            fontStyle: 'italic',
                                            color: '#555',
                                            marginTop: '0',
                                        }}
                                    >
                                        {getBackupFrequencyCaption()}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Navigation Buttons with Transition */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }} // Delay to appear after slider
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleBack}
                                    className="quiz-button grey"
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleNext}
                                    className="quiz-button"
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}
                    {quizStep === 2 && (
                        <>
                            {/* Title with Transition */}
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }} // Starting faded and shifted left
                                animate={{ opacity: 1, x: 0 }} // Animate to visible and centered
                                transition={{ duration: 0.8 }} // Animation duration
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Cloud Usage
                            </motion.h2>

                            {/* Question with Transition */}
                            <motion.p
                                initial={{ opacity: 0, x: 50 }} // Start faded and shifted right
                                animate={{ opacity: 1, x: 0 }} // Animate to visible and centered
                                transition={{ duration: 1.0 }} // Animation duration
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How many devices automatically back up to the cloud?
                            </motion.p>

                            {/* Slider and Labels with Transition */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} // Start faded and shifted down
                                animate={{ opacity: 1, y: 0 }} // Animate to visible and its original position
                                transition={{ duration: 1.0, delay: 0.3 }} // Delay to appear after the question
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '60%',
                                    }}
                                >
                                    {/* Left Label */}
                                    <span
                                        style={{
                                            fontSize: '1rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            flex: '0 0 120px', // Fixed width for consistency
                                            textAlign: 'center',
                                        }}
                                    >
                                        0 devices
                                    </span>

                                    {/* Slider */}
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={deviceCount}
                                        onChange={(e) => setDeviceCount(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${deviceCount}%, #EEE ${deviceCount}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                            transition: 'background 0.3s ease',
                                        }}
                                    />

                                    {/* Right Label */}
                                    <span
                                        style={{
                                            fontSize: '1rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            flex: '0 0 120px', // Fixed width for consistency
                                            textAlign: 'center',
                                        }}
                                    >
                                        3+ devices
                                    </span>
                                </div>

                                {/* Slider Captions */}
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p
                                        style={{
                                            fontSize: '1.2rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            marginBottom: '0',
                                        }}
                                    >
                                        {getDeviceCountLabel()}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '0.9rem',
                                            fontStyle: 'italic',
                                            color: '#555',
                                            marginTop: '0',
                                        }}
                                    >
                                        {getDeviceCountCaption()}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Navigation Buttons with Transition */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }} // Delay to appear after slider
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }} // Slightly scale up on hover
                                    whileTap={{ scale: 0.95 }}  // Slightly scale down on click
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }} // Slightly scale up on hover
                                    whileTap={{ scale: 0.95 }}  // Slightly scale down on click
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}
                    {quizStep === 3 && (
                        <>
                            {/* Title with Transition */}
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }} // Starting state: invisible, shifted left
                                animate={{ opacity: 1, x: 0 }}   // End state: visible, centered
                                transition={{ duration: 0.8 }}   // Animation duration
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Streaming and Media
                            </motion.h2>

                            {/* Question with Transition */}
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}  // Starting state: invisible, shifted right
                                animate={{ opacity: 1, x: 0 }}   // End state: visible, centered
                                transition={{ duration: 1.0 }}   // Animation duration
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How many hours do you stream videos (e.g., Netflix, YouTube) weekly?
                            </motion.p>

                            {/* Slider Container with Transition */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}  // Starting state: invisible, shifted down
                                animate={{ opacity: 1, y: 0 }}   // End state: visible, centered
                                transition={{ duration: 1.0, delay: 0.3 }} // Slight delay after question
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '60%',
                                    }}
                                >
                                    {/* Left Label */}
                                    <span
                                        style={{
                                            fontSize: '1rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            flex: '0 0 120px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        0 hours
                                    </span>

                                    {/* Slider */}
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={streamingHours}
                                        onChange={(e) => setStreamingHours(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${streamingHours}%, #EEE ${streamingHours}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                            transition: 'background 0.3s ease',
                                        }}
                                    />

                                    {/* Right Label */}
                                    <span
                                        style={{
                                            fontSize: '1rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            flex: '0 0 120px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        40+ hours
                                    </span>
                                </div>

                                {/* Slider Captions */}
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p
                                        style={{
                                            fontSize: '1.2rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            marginBottom: '0',
                                        }}
                                    >
                                        {getStreamingHoursLabel()}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '0.9rem',
                                            fontStyle: 'italic',
                                            color: '#555',
                                            marginTop: '0',
                                        }}
                                    >
                                        {getStreamingHoursCaption()}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Navigation Buttons with Transition */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }} // Delayed to appear after slider
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }} // Slightly scale up on hover
                                    whileTap={{ scale: 0.95 }}  // Slightly scale down on click
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }} // Slightly scale up on hover
                                    whileTap={{ scale: 0.95 }}  // Slightly scale down on click
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 4 && (
                        <>
                            {/* Title with Transition */}
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }} // Start faded and shifted left
                                animate={{ opacity: 1, x: 0 }}   // Animate to visible and centered
                                transition={{ duration: 0.8 }}   // Animation duration
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Streaming and Media
                            </motion.h2>
                    
                            {/* Question with Transition */}
                            <motion.p
                                initial={{ opacity: 0, x: 50 }} // Start faded and shifted right
                                animate={{ opacity: 1, x: 0 }}  // Animate to visible and centered
                                transition={{ duration: 1.0 }}  // Animation duration
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                What is your typical streaming quality?
                            </motion.p>
                    
                            {/* Radio Button Container with Transition */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} // Start faded and shifted down
                                animate={{ opacity: 1, y: 0 }}  // Animate to visible and centered
                                transition={{ duration: 1.0, delay: 0.3 }} // Delay after the question
                                style={{
                                    marginBottom: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        width: '300px', // Fixed width for alignment
                                        gap: '0.5rem',
                                    }}
                                >
                                    {/* SD Option */}
                                    <motion.label
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.0, delay: 0.4 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '1rem',
                                            color: '#333',
                                        }}
                                    >
                                        <label className="custom-radio">
                                            <input
                                                type="radio"
                                                name="streamingQuality"
                                                value="SD"
                                                checked={streamingQuality === "SD"}
                                                onChange={(e) => setStreamingQuality(e.target.value)}
                                            />
                                            <span className="bullet"></span>
                                            <span>SD (Standard Definition) - (Basic quality, low bandwidth)</span>
                                        </label>
                                    </motion.label>
                    
                                    {/* HD Option */}
                                    <motion.label
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.0, delay: 0.5 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '1rem',
                                            color: '#333',
                                        }}
                                    >
                                        <label className="custom-radio">
                                            <input
                                                type="radio"
                                                name="streamingQuality"
                                                value="HD"
                                                checked={streamingQuality === "HD"}
                                                onChange={(e) => setStreamingQuality(e.target.value)}
                                            />
                                            <span className="bullet"></span>
                                            <span>HD (High Definition) - (Crisp and clear for most content)</span>
                                        </label>
                                    </motion.label>
                    
                                    {/* Ultra HD Option */}
                                    <motion.label
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.0, delay: 0.6 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '1rem',
                                            color: '#333',
                                        }}
                                    >
                                        <label className="custom-radio">
                                            <input
                                                type="radio"
                                                name="streamingQuality"
                                                value="UltraHD/4K"
                                                checked={streamingQuality === "UltraHD/4K"}
                                                onChange={(e) => setStreamingQuality(e.target.value)}
                                            />
                                            <span className="bullet"></span>
                                            <span>Ultra HD/4K - (Highest quality, very data-intensive)</span>
                                        </label>
                                    </motion.label>
                                </div>
                            </motion.div>
                    
                            {/* Navigation Buttons with Transition */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.7 }} // Delayed to appear after radio buttons
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }} // Slightly scale up on hover
                                    whileTap={{ scale: 0.95 }}  // Slightly scale down on click
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }} // Slightly scale up on hover
                                    whileTap={{ scale: 0.95 }}  // Slightly scale down on click
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}
                    {quizStep === 5 && (
                        <>
                            {/* Title with Transition */}
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }} // Starting state: invisible, shifted left
                                animate={{ opacity: 1, x: 0 }}   // End state: visible, centered
                                transition={{ duration: 0.8 }}   // Animation duration
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Streaming and Media
                            </motion.h2>

                            {/* Question with Transition */}
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}  // Starting state: invisible, shifted right
                                animate={{ opacity: 1, x: 0 }}   // End state: visible, centered
                                transition={{ duration: 1.0 }}   // Animation duration
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How often do you stream music or podcasts in the background without actively listening?
                            </motion.p>

                            {/* Slider Container with Transition */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}  // Starting state: invisible, shifted down
                                animate={{ opacity: 1, y: 0 }}   // End state: visible, centered
                                transition={{ duration: 1.0, delay: 0.3 }} // Slight delay after question
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '60%',
                                    }}
                                >
                                    {/* Left Label */}
                                    <span
                                        style={{
                                            fontSize: '1rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            flex: '0 0 120px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Never
                                    </span>

                                    {/* Slider */}
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={backgroundAudioFreq}
                                        onChange={(e) => setBackgroundAudioFreq(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${backgroundAudioFreq}%, #EEE ${backgroundAudioFreq}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                            transition: 'background 0.3s ease',
                                        }}
                                    />

                                    {/* Right Label */}
                                    <span
                                        style={{
                                            fontSize: '1rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            flex: '0 0 120px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Frequently
                                    </span>
                                </div>

                                {/* Slider Captions */}
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p
                                        style={{
                                            fontSize: '1.2rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            marginBottom: '0',
                                        }}
                                    >
                                        {getBackgroundAudioLabel()}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '0.9rem',
                                            fontStyle: 'italic',
                                            color: '#555',
                                            marginTop: '0',
                                        }}
                                    >
                                        {getBackgroundAudioCaption()}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Navigation Buttons with Transition */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }} // Delayed to appear after slider
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }} // Slightly scale up on hover
                                    whileTap={{ scale: 0.95 }}  // Slightly scale down on click
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }} // Slightly scale up on hover
                                    whileTap={{ scale: 0.95 }}  // Slightly scale down on click
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}
                        {quizStep === 6 && (
                        <>
                            {/* Title with Transition */}
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }} // Slide in from the left
                                animate={{ opacity: 1, x: 0 }}   // Fully visible, centered
                                transition={{ duration: 0.8 }}   // Animation duration
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Social Media & Online Presence
                            </motion.h2>

                            {/* Question with Transition */}
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}  // Slide in from the right
                                animate={{ opacity: 1, x: 0 }}   // Fully visible, centered
                                transition={{ duration: 1.0 }}   // Animation duration
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How many hours do you spend on social media daily?
                            </motion.p>

                            {/* Slider Container with Transition */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}  // Fade in from below
                                animate={{ opacity: 1, y: 0 }}   // Fully visible, centered
                                transition={{ duration: 1.0, delay: 0.3 }} // Slight delay after question
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '60%',
                                    }}
                                >
                                    {/* Left Label */}
                                    <span
                                        style={{
                                            fontSize: '1rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            flex: '0 0 120px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        0 hours
                                    </span>

                                    {/* Slider */}
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={socialMediaHours}
                                        onChange={(e) => setSocialMediaHours(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${socialMediaHours}%, #EEE ${socialMediaHours}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                            transition: 'background 0.3s ease',
                                        }}
                                    />

                                    {/* Right Label */}
                                    <span
                                        style={{
                                            fontSize: '1rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            flex: '0 0 120px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        6+ hours
                                    </span>
                                </div>

                                {/* Slider Captions */}
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p
                                        style={{
                                            fontSize: '1.2rem',
                                            color: '#2F4F4F',
                                            fontWeight: 'bold',
                                            marginBottom: '0',
                                        }}
                                    >
                                        {getSocialMediaHoursLabel()}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '0.9rem',
                                            fontStyle: 'italic',
                                            color: '#555',
                                            marginTop: '0',
                                        }}
                                    >
                                        {getSocialMediaHoursCaption()}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Navigation Buttons with Transition */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }} // Delayed to appear after slider
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }} // Slightly scale up on hover
                                    whileTap={{ scale: 0.95 }}  // Slightly scale down on click
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }} // Slightly scale up on hover
                                    whileTap={{ scale: 0.95 }}  // Slightly scale down on click
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 7 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Social Media & Online Presence
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How frequently do you upload photos, videos, or posts to social media platforms?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Rarely
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={uploadFrequency}
                                        onChange={(e) => setUploadFrequency(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${uploadFrequency}%, #EEE ${uploadFrequency}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                            transition: 'background 0.3s ease',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Daily
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getUploadFrequencyLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getUploadFrequencyCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 8 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Social Media & Online Presence
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How many active social media accounts do you have?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        1 account
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={socialMediaAccounts}
                                        onChange={(e) => setSocialMediaAccounts(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${socialMediaAccounts}%, #EEE ${socialMediaAccounts}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                            transition: 'background 0.3s ease',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        10+ accounts
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getSocialMediaAccountsLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getSocialMediaAccountsCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 9 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Online Gaming & Entertainment
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How many hours do you game online per week?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        0 hours
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={gamingHours}
                                        onChange={(e) => setGamingHours(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${gamingHours}%, #EEE ${gamingHours}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                            transition: 'background 0.3s ease',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        20+ hours
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getGamingHoursLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getGamingHoursCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 10 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Online Gaming & Entertainment
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                Do you use energy-intensive gaming devices (e.g., gaming PC, consoles)?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ 
                                    marginBottom: '2rem', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center' 
                                }}
                            >
                                <div style={{
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'flex-start', 
                                    width: '100px',
                                    gap: '0.5rem'
                                }}>
                                    <motion.label
                                        whileHover={{ scale: 1.1 }}
                                        className="custom-radio"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '1rem',
                                            color: '#333'
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="energyIntensiveDevices"
                                            value="Yes"
                                            checked={energyIntensiveDevices === "Yes"}
                                            onChange={(e) => setEnergyIntensiveDevices(e.target.value)}
                                        />
                                        <span className="bullet"></span>
                                        <span>Yes</span>
                                    </motion.label>
                                    <motion.label
                                        whileHover={{ scale: 1.1 }}
                                        className="custom-radio"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            fontSize: '1rem',
                                            color: '#333'
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="energyIntensiveDevices"
                                            value="No"
                                            checked={energyIntensiveDevices === "No"}
                                            onChange={(e) => setEnergyIntensiveDevices(e.target.value)}
                                        />
                                        <span className="bullet"></span>
                                        <span>No</span>
                                    </motion.label>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 11 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Online Gaming & Entertainment
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                Do you use energy-saving settings or devices for gaming?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Never
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={energySavingFreq}
                                        onChange={(e) => setEnergySavingFreq(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${energySavingFreq}%, #EEE ${energySavingFreq}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                            transition: 'background 0.3s ease',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Always
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getEnergySavingLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getEnergySavingCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 12 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Video Calls & Remote Work
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How many hours per week do you spend in video calls or virtual meetings?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        0 hours
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={videoCallHours}
                                        onChange={(e) => setVideoCallHours(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${videoCallHours}%, #EEE ${videoCallHours}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        15+ hours
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getVideoCallHoursLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getVideoCallHoursCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 13 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Video Calls & Remote Work
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                Do you regularly use cameras during video calls?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Never
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={cameraUsageFreq}
                                        onChange={(e) => setCameraUsageFreq(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${cameraUsageFreq}%, #EEE ${cameraUsageFreq}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Always
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getCameraUsageLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getCameraUsageCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 14 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Video Calls & Remote Work
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                Do you attend video calls where you're not actively participating (e.g., keeping the meeting open)?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Never
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={passiveParticipation}
                                        onChange={(e) => setPassiveParticipation(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${passiveParticipation}%, #EEE ${passiveParticipation}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Frequently
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getPassiveParticipationLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getPassiveParticipationCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 15 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Device Usage & Energy Management
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How many devices do you own that are regularly connected to the internet (e.g., phone, laptop, smart TV)?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        1 device
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={connectedDevices}
                                        onChange={(e) => setConnectedDevices(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${connectedDevices}%, #EEE ${connectedDevices}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        10+ devices
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getConnectedDevicesLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getConnectedDevicesCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 16 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Device Usage & Energy Management
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                Do you leave devices running or charging overnight unnecessarily?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Never
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={overnightCharging}
                                        onChange={(e) => setOvernightCharging(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${overnightCharging}%, #EEE ${overnightCharging}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Always
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getOvernightChargingLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getOvernightChargingCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 17 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Device Usage & Energy Management
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                Do you use energy-saving settings on your devices (e.g., battery saver, low-power mode)?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Never
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={deviceEnergySaving}
                                        onChange={(e) => setDeviceEnergySaving(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${deviceEnergySaving}%, #EEE ${deviceEnergySaving}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Always
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getDeviceEnergySavingLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getDeviceEnergySavingCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 18 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Digital Shopping & Online Transactions
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                How often do you shop online?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Rarely
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={onlineShoppingFreq}
                                        onChange={(e) => setOnlineShoppingFreq(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${onlineShoppingFreq}%, #EEE ${onlineShoppingFreq}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Frequently
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getOnlineShoppingLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getOnlineShoppingCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === 19 && (
                        <>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2F4F4F' }}
                            >
                                Digital Shopping & Online Transactions
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#2F4F4F', fontWeight: 'bold' }}
                            >
                                Do you stream live online shopping events (e.g., product launches, live demos)?
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.3 }}
                                style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '60%',
                                }}>
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Never
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={liveShoppingEvents}
                                        onChange={(e) => setLiveShoppingEvents(e.target.value)}
                                        style={{
                                            width: '100%',
                                            appearance: 'none',
                                            height: '10px',
                                            borderRadius: '6px',
                                            background: `linear-gradient(to right, #0091ff ${liveShoppingEvents}%, #EEE ${liveShoppingEvents}%)`,
                                            outline: 'none',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <span style={{
                                        fontSize: '1rem',
                                        color: '#2F4F4F',
                                        fontWeight: 'bold',
                                        flex: '0 0 120px',
                                        textAlign: 'center',
                                    }}>
                                        Always
                                    </span>
                                </div>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#2F4F4F', fontWeight: 'bold', marginBottom: '0' }}>
                                        {getLiveShoppingLabel()}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555', marginTop: '0' }}>
                                        {getLiveShoppingCaption()}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: 0.5 }}
                                style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button grey"
                                    onClick={handleBack}
                                >
                                    Back
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="quiz-button"
                                    onClick={handleNext}
                                >
                                    Next
                                </motion.button>
                            </motion.div>
                        </>
                    )}{quizStep === "results" && (
                    <div className="results-container">
                        {/* Persistent Navigation Bar */}
                        <div className="results-nav">
                          {navOptions.map((boxName) => (
                            <div
                              key={boxName}
                              className={`result-box ${activeResult === boxName ? "active" : ""}`}
                              onClick={() => setActiveResult(boxName)}
                            >
                              {boxName}
                            </div>
                          ))}
                        </div>
                  
                        {/* Dynamic Content Section */}
                        <motion.div
                          key={activeResult}
                          className="results-content"
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          {activeResult === "Results" && (
                            <><motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0 }}
                          >
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
                              Your Annual Digital Impact
                            </h2>
                          
                            {/* Total Energy and Emissions */}
                            <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                              <strong>Total Energy Consumption:</strong> {totalEnergy.toFixed(2)} kWh
                            </p>
                            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                              <strong>Total Carbon Emissions:</strong> {totalCO2.toFixed(2)} kg CO₂
                            </p>
                          
                            {/* Visual Bar Comparisons */}
                            <div style={{ marginBottom: '2rem' }}>
                                    <h3>How Do You Compare?</h3>

                                    {/* Carbon Footprint */}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                                        🌎 Global Average Carbon Footprint: <span style={{ color: '#555' }}>4000 kg CO₂</span>
                                    </p>
                                    <div style={{ position: 'relative', height: '10px', borderRadius: '5px', background: '#E0E0E0' }}>
                                        {/* Dynamic Bar */}
                                        <div
                                        style={{
                                            width: `${Math.min((totalCO2 / 4000) * 100, 100)}%`,
                                            background: totalCO2 > 4000 ? '#FF6347' : '#0091FF',
                                            height: '10px',
                                            borderRadius: '5px',
                                        }}
                                        ></div>
                                    </div>
                                    {totalCO2 > 4000 && (
                                        <p style={{ color: '#FF6347', marginTop: '0.5rem' }}>
                                        ⚠️ Your carbon footprint exceeds the global average!
                                        </p>
                                    )}
                                    </div>

                                    {/* Annual Energy Consumption */}
                                    <div>
                                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                                        🏠 Annual Energy of an Average Household: <span style={{ color: '#555' }}>3600 kWh</span>
                                    </p>
                                    <div style={{ position: 'relative', height: '10px', borderRadius: '5px', background: '#E0E0E0' }}>
                                        {/* Dynamic Bar */}
                                        <div
                                        style={{
                                            width: `${Math.min((totalEnergy / 3600) * 100, 100)}%`,
                                            background: totalEnergy > 3600 ? '#FF6347' : '#32CD32',
                                            height: '10px',
                                            borderRadius: '5px',
                                        }}
                                        ></div>
                                    </div>
                                    {totalEnergy > 3600 && (
                                        <p style={{ color: '#FF6347', marginTop: '0.5rem' }}>
                                        ⚠️ Your energy consumption exceeds the average household usage!
                                        </p>
                                    )}
                                    </div>
                            </div>
                          
                            {/* Equivalent Impacts */}
                            <div style={{ marginBottom: '2rem' }}>
                              <h3>What Does This Mean?</h3>
                              <ul style={{ listStyle: 'none', padding: '0', fontSize: '1.2rem' }}>
                                <li>🚗 Equivalent to driving <strong>{carMiles}</strong> miles</li>
                                <li>✈️ Equivalent to taking <strong>{flights}</strong> flights</li>
                                <li>🌳 Requires <strong>{trees}</strong> trees annually to offset</li>
                              </ul>
                            </div>
                        
                          </motion.div>                          
                            </>
                          )}
                          {activeResult === "Solutions" && (
                            <><motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                          >
                            <h2>
                              Solutions to Reduce Your Digital Footprint
                            </h2>
                            <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "#555" }}>
                              Here are impactful actions and resources to reduce your energy consumption and carbon
                              emissions:
                            </p>
                      
                            {/* Solutions List */}
                            <div className="solutions-list">
                              <ul style={{ listStyle: "none", padding: "0", fontSize: "1.1rem", lineHeight: "1.8" }}>
                                <li>
                                  <strong>📁 Optimize Cloud Storage:</strong> Use tools like{" "}
                                  <a href="https://www.google.com/drive" target="_blank" rel="noopener noreferrer">
                                    Google Drive Cleanup
                                  </a>{" "}
                                  or{" "}
                                  <a href="https://www.dropbox.com/clean" target="_blank" rel="noopener noreferrer">
                                    Dropbox Space Saver
                                  </a>{" "}
                                  to clean up unused files.
                                </li>
                                <li>
                                  <strong>📺 Reduce Streaming Impact:</strong> Lower streaming quality to SD and try platforms like{" "}
                                  <a href="https://projectdrawdown.org/" target="_blank" rel="noopener noreferrer">
                                    Project Drawdown
                                  </a>{" "}
                                  for energy-saving insights on streaming habits.
                                </li>
                                <li>
                                  <strong>🌱 Support Renewable Energy:</strong> Consider switching to providers like{" "}
                                  <a href="https://www.greenmountainenergy.com/" target="_blank" rel="noopener noreferrer">
                                    Green Mountain Energy
                                  </a>{" "}
                                  or similar renewable energy suppliers in your area.
                                </li>
                                <li>
                                  <strong>🔌 Power Off Devices:</strong> Use smart plugs from companies like{" "}
                                  <a href="https://www.tp-link.com/us/smart-home/smart-plug/" target="_blank" rel="noopener noreferrer">
                                    TP-Link
                                  </a>{" "}
                                  to turn off devices when not in use.
                                </li>
                                <li>
                                  <strong>🛒 Consolidate Online Orders:</strong> Combine purchases to reduce packaging and transportation
                                  emissions. Support carbon-neutral companies like{" "}
                                  <a href="https://www.patagonia.com/" target="_blank" rel="noopener noreferrer">
                                    Patagonia
                                  </a>.
                                </li>
                                <li>
                                  <strong>🎮 Optimize Gaming Energy:</strong> Use energy-saving modes on consoles (e.g., Xbox Energy Saver). Learn more on{" "}
                                  <a href="https://www.energystar.gov/products" target="_blank" rel="noopener noreferrer">
                                    ENERGY STAR® certified devices
                                  </a>.
                                </li>
                                <li>
                                  <strong>💻 Enable Power Management Settings:</strong> Set devices to "low power mode" or "hibernate" after inactivity.
                                  Reference guides like{" "}
                                  <a
                                    href="https://www.energy.gov/energysaver/articles/5-tips-save-energy-your-computers-and-office-equipment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    U.S. Department of Energy
                                  </a>.
                                </li>
                                <li>
                                  <strong>🌳 Offset Your Carbon Footprint:</strong> Support organizations like{" "}
                                  <a href="https://onetreeplanted.org/" target="_blank" rel="noopener noreferrer">
                                    One Tree Planted
                                  </a>{" "}
                                  or participate in carbon offset programs.
                                </li>
                                <li>
                                  <strong>🎧 Manage Background Audio:</strong> Turn off unnecessary audio playback and minimize streaming
                                  idle hours.
                                </li>
                                <li>
                                  <strong>📊 Monitor Usage:</strong> Use tools like{" "}
                                  <a href="https://www.carbonfootprint.com/" target="_blank" rel="noopener noreferrer">
                                    Carbon Footprint Calculator
                                  </a>{" "}
                                  to measure and reduce your emissions over time.
                                </li>
                              </ul>
                            </div>
                      
                            {/* Motivational Section */}
                            <div style={{ textAlign: "center", marginTop: "2rem" }}>
                              <p style={{ fontSize: "1.1rem", color: "#555" }}>
                                "Every small action adds up. By reducing your digital energy footprint, you contribute to a cleaner,
                                healthier planet. 🌍"
                              </p>
                            </div>
                          </motion.div>
                            </>
                          )}
                          {activeResult === "Statistics" && (
                            <><motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                          >
                            <div className="stats-container">
                                <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
                                    Your Digital Footprint Breakdown
                                </h2>
                                {categoryStats.map((item, index) => (
                                    <div key={index} className="stat-box">
                                        <h3>{item.category}</h3>
                                        <p>
                                            🌿 Energy Consumption: <strong>{item.energy.toFixed(2)} kWh</strong>
                                            <span style={{ marginLeft: "0.5rem", color: "#555" }}>
                                                ({((item.energy / totalEnergy) * 100).toFixed(1)}%)
                                            </span>
                                        </p>
                                        <p>
                                            💨 Carbon Emissions: <strong>{item.emissions.toFixed(2)} kg CO₂</strong>
                                            <span style={{ marginLeft: "0.5rem", color: "#555" }}>
                                                ({((item.emissions / totalCO2) * 100).toFixed(1)}%)
                                            </span>
                                        </p>
                                        <div style={{ height: "8px", background: "#EEE", borderRadius: "5px" }}>
                                            <div
                                                style={{
                                                    width: `${(item.energy / totalEnergy) * 100}%`,
                                                    height: "100%",
                                                    background: "#3b82f6",
                                                    borderRadius: "5px",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                          </motion.div>
                            </>
                          )}
                          {activeResult === "Works Cited" && (
                            <><h3 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#333" }}>
                            Works Cited
                          </h3>
                          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
                            Here are the references, data sources, and fun insights for this quiz.
                          </p>
                      
                          {/* Data Sources */}
                          <div style={{ textAlign: "left", marginBottom: "1rem" }}>
                            <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                              📚 Data Sources & References
                            </h4>
                            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", fontSize: "1rem" }}>
                              <li>
                                <a href="https://www.iea.org/" target="_blank" rel="noopener noreferrer">
                                  International Energy Agency (IEA)
                                </a> - Global energy consumption data.
                              </li>
                              <li>
                                <a href="https://www.carbontrust.com/" target="_blank" rel="noopener noreferrer">
                                  Carbon Trust
                                </a> - Carbon emissions benchmarks.
                              </li>
                              <li>
                                <a href="https://www.nrdc.org/" target="_blank" rel="noopener noreferrer">
                                  Natural Resources Defense Council (NRDC)
                                </a> - Energy-saving solutions and insights.
                              </li>
                              <li>
                                <a href="https://projectdrawdown.org/" target="_blank" rel="noopener noreferrer">
                                  Project Drawdown
                                </a> - Streaming energy reduction insights.
                              </li>
                                <li>
                                <a href="https://ourworldindata.org/" target="_blank" rel="noopener noreferrer">
                                    Our World in Data
                                </a> - Environmental and emissions trends.
                                </li>
                              <li>
                                <a href="https://www.footprintcalculator.org/" target="_blank" rel="noopener noreferrer">
                                  Footprint Calculator
                                </a> - Measure and understand your ecological footprint.
                              </li>
                            </ul>
                          </div>
                      
                          {/* Fun Fact Section */}
                          <div style={{ textAlign: "left", marginBottom: "1rem" }}>
                            <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                              🌍 Fun Fact: Energy to Build This Website
                            </h4>
                            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                              Did you know? The creation of this interactive website, with its visuals,
                              data processing, and design, consumed approximately{" "}
                              <strong>5 kWh</strong> of energy. This is equivalent to:
                            </p>
                            <ul style={{ listStyleType: "circle", paddingLeft: "1.5rem", fontSize: "1rem" }}>
                              <li>☕ Brewing 50 cups of coffee.</li>
                              <li>💻 Running a laptop for 100 hours.</li>
                              <li>🔌 Powering an LED bulb for 10 days.</li>
                            </ul>
                          </div>
                      
                          {/* Additional Fact */}
                          <div style={{ textAlign: "left", marginBottom: "1rem" }}>
                            <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                              🌱 Digital Sustainability Tip
                            </h4>
                            <p style={{ fontSize: "1rem" }}>
                              Every time we minimize unnecessary digital data, like unused cloud storage
                              or excessive emails, we reduce carbon emissions. It’s estimated that{" "}
                              <strong>1 GB of cloud storage</strong> generates around{" "}
                              <strong>5 kWh annually</strong>—enough to typically 
                              power a <strong>small household</strong> for a day, 
                              potentially running appliances like a 
                              refrigerator, several lights, a TV, and 
                              even a washing machine!{" "}
                            </p>
                          </div>
                      
                          {/* Closing */}
                          <div style={{ textAlign: "center", marginTop: "1rem" }}>
                            <p style={{ fontSize: "1rem", color: "#555" }}>
                              "Even small changes can create big impacts. Start reducing your digital
                              footprint today!" 🌎
                            </p>
                          </div>
                            </>
                          )}
                        </motion.div>
                        {/* Re-Take Quiz Button */}
                        <button
                        className="retake-button"
                        onClick={() => {
                            // Reset quiz state
                            setIsQuizStarted(false);
                            setQuizStep(0);
                        
                            // Reset all slider and input states
                            setCloudStorage(0);
                            setBackupFrequency(0);
                            setDeviceCount(0);
                            setStreamingHours(0);
                            setStreamingQuality("");
                            setBackgroundAudioFreq(0);
                            setSocialMediaHours(0);
                            setUploadFrequency(0);
                            setSocialMediaAccounts(0);
                            setGamingHours(0);
                            setEnergyIntensiveDevices("");
                            setEnergySavingFreq(0);
                            setVideoCallHours(0);
                            setCameraUsageFreq(0);
                            setPassiveParticipation(0);
                            setConnectedDevices(0);
                            setOvernightCharging(0);
                            setDeviceEnergySaving(0);
                            setOnlineShoppingFreq(0);
                            setLiveShoppingEvents(0);
                            setActiveResult("Results"); // Reset active navigation to "Results
                        }}
                        >
                        Re-Take Quiz
                        </button>
                      </div>
                    )}                                                                                                                                                                                                                                                                                              
                </section>
            </>
            )}
        </div>
    );
}

export default App;
