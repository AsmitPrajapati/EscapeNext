import { useState } from "react";
import styles from "./propertyForm.module.css";

// Step Components
import PropertyTypeSelector from "../../Property Type Selector/propertyTypeSelector";
import BasicInfoStep from "../../setupSteps/BasicInfo/basicInfo";
import LocationStep from "../../setupSteps/Location/location";
import RoomSetupStep from "../../setupSteps/RoomSetup/roomSetup";
import AvailabilityStep from "../../steps/Availability/availability-step";
import RoomPriceStep from "../../steps/RoomPrice/roomPrice";
import OccupancyStep from "../../steps/Occupancy/occupancyStep";
import RoomDetailsStep from "../../steps/Room Details/roomDetails";
import InventoryStep from "../../steps/Inventory/inventory";
import PhotosStep from "../../setupSteps/Photos/photos";

import StepNavigation from "../../StepNavigation/stepNavigation";
import Tabs from "../../tabs/tab";
import StepHeading from "../../StepHeading/stepHeading";


//  STEP CONSTANTS

const STEPS = {
  PROPERTY_TYPE: "propertyType",
  BASIC_INFO: "basicInfo",
  LOCATION: "location",
  ROOM_SETUP: "roomSetup",
  AVAILABILITY: "availability",
  ROOM_PRICE: "roomPrice",
  OCCUPANCY: "occupancy",
  ROOM_DETAILS: "roomDetails",
  INVENTORY: "inventory",
  PHOTOS: "photos",
};

// STEP CONFIGURATION

// const STEP_CONFIG = [
//   {
//     id: STEPS.PROPERTY_TYPE,
//     component: PropertyTypeSelector,
//     dataKey: "type",
//   },
//   {
//     id: STEPS.BASIC_INFO,
//     component: BasicInfoStep,
//     dataKey: "basicInfo",
//   },
//   {
//     id: STEPS.LOCATION,
//     component: LocationStep,
//     dataKey: "location",
//   },
//   {
//     id: STEPS.ROOM_SETUP,
//     component: RoomSetupStep,
//     dataKey: "roomSetup",
//   },
//   {
//     id: STEPS.AVAILABILITY,
//     component: AvailabilityStep,
//     dataKey: "availability",
//   },
//   {
//     id: STEPS.ROOM_PRICE,
//     component: RoomPriceStep,
//     dataKey: "roomPrice",
//   },
//   {
//     id: STEPS.OCCUPANCY,
//     component: OccupancyStep,
//     dataKey: "occupancy",
//   },
//   {
//     id: STEPS.ROOM_DETAILS,
//     component: RoomDetailsStep,
//     dataKey: "roomDetails",
//   },
//   {
//     id: STEPS.INVENTORY,
//     component: InventoryStep,
//     dataKey: "inventory",
//   },
//   {
//     id: STEPS.PHOTOS,
//     component: PhotosStep,
//     dataKey: "photos",
//   },
// ];


const STEP_CONFIG = [
  {
    id: STEPS.PROPERTY_TYPE,
    component: PropertyTypeSelector,
    dataKey: "type",
    needsFullData: false
  },
  {
    id: STEPS.BASIC_INFO,
    component: BasicInfoStep,
    dataKey: "basicInfo",
    needsFullData: false
  },
  {
    id: STEPS.LOCATION,
    component: LocationStep,
    dataKey: "location",
    needsFullData: false
  },
  {
    id: STEPS.ROOM_SETUP,
    component: RoomSetupStep,
    dataKey: "roomSetup",
    needsFullData: false
  },
  {
    id: STEPS.AVAILABILITY,
    component: AvailabilityStep,
    dataKey: "availability",
    needsFullData: false
  },
  {
    id: STEPS.ROOM_PRICE,
    component: RoomPriceStep,
    dataKey: "price",
    needsFullData: false
  },
  {
    id: STEPS.OCCUPANCY,
    component: OccupancyStep,
    dataKey: "occupancy",
    needsFullData: false
  },
  {
    id: STEPS.ROOM_DETAILS,
    component: RoomDetailsStep,
    dataKey: "roomDetails",
    needsFullData: false
  },
  {
    id: STEPS.INVENTORY,
    component: InventoryStep,
    dataKey: "inventory",
    needsFullData: true
  },
  {
    id: STEPS.PHOTOS,
    component: PhotosStep,
    dataKey: "photos",
    needsFullData: false
  },
];



function PropertyForm({ propertyId, onBack }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(propertyId ? 1 : 0);
  const [propertyData, setPropertyData] = useState({});
  const [currentStepData, setCurrentStepData] = useState(null);
  const [isStepValid, setIsStepValid] = useState(false);

  const isLastStep = currentStepIndex === STEP_CONFIG.length - 1;
  const StepComponent = STEP_CONFIG[currentStepIndex].component;
  const stepKey = STEP_CONFIG[currentStepIndex].dataKey;

  // const handleNext = () => {

  //   setPropertyData((prev) => ({
  //     ...prev,
  //     [stepKey]: currentStepData,
  //   }));

  //   if (isLastStep) {
  //     console.log("Final payload:", {
  //       ...propertyData,
  //       [stepKey]: currentStepData,
  //     });
  //     onBack();
  //     return;
  //   }

  //   setCurrentStepIndex((i) => i + 1);
  //   setCurrentStepData(null);
  //   setIsStepValid(false);
  // };


  const handleNext = async () => {
    const updatedData = {
      ...propertyData,
      [stepKey]: currentStepData,
    };

    setPropertyData(updatedData);

    // not last step → just forward
    if (!isLastStep) {
      setCurrentStepIndex((i) => i + 1);
      setCurrentStepData(null);
      setIsStepValid(false);
      return;
    }

    // ---- FINAL STEP (multipart for multer) ----
    const formData = new FormData();

    // append non-photo data as JSON fields
    Object.entries(updatedData).forEach(([key, value]) => {
      if (key !== "photos") {
        formData.append(key, JSON.stringify(value));
      }
    });

    // append photos as File[] for multer
    if (Array.isArray(updatedData.photos)) {
      updatedData.photos.forEach(file => {
        formData.append("photos", file);
      });
    }

    try {
      const res = await fetch(`http://localhost:4000/api/property`, {
        method: "POST",
        body: formData, // IMPORTANT: no headers
      });

      if (!res.ok) throw new Error("Failed to create property");

      const data = await res.json();
      console.log("Submitted:", data);

      onBack(); // success callback
    } catch (err) {
      console.error("Submit error:", err);
    }
  };


  const handleBack = () => {
    setCurrentStepIndex((i) => {
      const prevIndex = Math.max(i - 1, 0);
      const prevKey = STEP_CONFIG[prevIndex].dataKey;

      setCurrentStepData(propertyData[prevKey] || null);
      setIsStepValid(Boolean(propertyData[prevKey]));

      return prevIndex;
    });
  };


  return (
    <div className={styles.formContainer}>
      <Tabs />
      <StepHeading />
      {/* <StepComponent
        data={propertyData[stepKey]}
        onChange={setCurrentStepData}
        onValidityChange={setIsStepValid}
      /> */}

      <StepComponent
        // data={propertyData[stepKey]}
        data={STEP_CONFIG[currentStepIndex].needsFullData? propertyData: propertyData[stepKey]}
        onChange={setCurrentStepData}
        onValidityChange={setIsStepValid}
      />
      <StepNavigation
        onBack={handleBack}
        onNext={handleNext}
        nextDisabled={!isStepValid}
        isLastStep={isLastStep}
      />
    </div>
  );
}
export default PropertyForm;
