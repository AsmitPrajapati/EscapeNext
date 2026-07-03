import { useFormState } from "../../hooks/use-form-state";
import { STAR_RATINGS } from "../../lib/constants";
import styles from "./basicInfo.module.css";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import Select, { components as RSComponents } from "react-select";
import CreatableSelect from "react-select/creatable";

export default function BasicInfoStep({ data, onChange, onValidityChange }) {
  const { formData, updateField, setFormData } = useFormState({
    propertyName: "",
    subInfo: "",
    tourType: "",
    starRating: "",
    builtYear: "",
    acceptingBookings: "",
    channelManager: null,
    mobileNumber: "",
    email: "",
    rating: "",
    price: "",
    discount: "",
    taxes: "",
    taxInfo: "",
    duration: "",
    category: "",
    policies: [],
    facilities: [],
    tags: [],
    ratingComment: "",
    review_count: 0,
    rating_label: "",
    meals: { breakfast: false, lunch: false, dinner: false },
  });

  // ✅ Restore data when navigating back
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data, setFormData]);

  // ✅ Sync data + validation with parent
  useEffect(() => {
    onChange(formData);

    const isValid =
      formData.propertyName &&
      formData.starRating &&
      formData.mobileNumber &&
      formData.email;

    onValidityChange(Boolean(isValid));
  }, [formData, onChange, onValidityChange]);

  // for tags
  const SUGGESTED_TAGS = [
    "Hot Deal",
    "Popular",
    "Couple Friendly",
    "Family Friendly",
    "Best Value",
  ];

  const SUGGESTED_POLICIES = [
    "No Smoking",
    "No Pets",
    "Free Cancellation",
    "Check-in After 2PM",
    "No Parties",
  ];

  const options = [
    { value: "wifi", label: "Wifi" },
    { value: "pool", label: "Swimming Pool" },
    { value: "parking", label: "Parking" },
  ];

  const category = [
    { value: "luxury", label: "Luxury" },
    { value: "budget", label: "Budget" },
    { value: "boutique", label: "Boutique" },
  ];

  const YEAR_OPTIONS = ["2025", "2024", "2023", "2022", "2021", "2020"].map(
    (y) => ({ value: y, label: y }),
  );

  const RATING_LABEL_OPTIONS = [
    { value: "Excellent", label: "Excellent" },
    { value: "Good", label: "Good" },
    { value: "Average", label: "Average" },
    { value: "Poor", label: "Poor" },
  ];

  const TOUR_TYPE_OPTIONS = [
    "Nature Tour",
    "Adventure Tour",
    "Cultural Tour",
    "City Tour",
    "Food Tour",
    "Cruises Tour",
  ].map((t) => ({ value: t, label: t }));

  const tourTypeOptions = [
    ...(Array.isArray(TOUR_TYPE_OPTIONS) ? TOUR_TYPE_OPTIONS : []),
    ...(formData.tourType
      ? [{ value: formData.tourType, label: formData.tourType }]
      : []),
  ].reduce((acc, cur) => {
    if (!acc.find((o) => o.value === cur.value)) acc.push(cur);
    return acc;
  }, []);

  // facility options + handlers for CreatableSelect
  const facilityOptions = [
    ...(Array.isArray(options) ? options : []),
    ...(Array.isArray(formData.facilities)
      ? formData.facilities.map((f) => ({ value: f, label: f }))
      : []),
  ].reduce((acc, cur) => {
    if (!acc.find((o) => o.value === cur.value)) acc.push(cur);
    return acc;
  }, []);

  const selectedFacilities = (formData.facilities || []).map((f) => ({
    value: f,
    label: f,
  }));

  const onFacilitiesChange = (selected) => {
    const next = selected ? selected.map((s) => s.value) : [];
    updateField("facilities", next);
  };

  const onCreateFacility = (inputValue) => {
    if (!inputValue) return;
    const next = Array.isArray(formData.facilities)
      ? [...formData.facilities, inputValue]
      : [inputValue];
    updateField("facilities", next);
  };

  // tags: prepare suggested options and handlers for CreatableSelect
  const tagOptions = [
    ...(Array.isArray(SUGGESTED_TAGS)
      ? SUGGESTED_TAGS.map((t) => ({ value: t, label: t }))
      : []),
    ...(Array.isArray(formData.tags)
      ? formData.tags.map((t) => ({ value: t, label: t }))
      : []),
  ].reduce((acc, cur) => {
    if (!acc.find((o) => o.value === cur.value)) acc.push(cur);
    return acc;
  }, []);

  const selectedTags = (formData.tags || []).map((t) => ({
    value: t,
    label: t,
  }));

  const onTagsChange = (selected) => {
    const next = selected ? selected.map((s) => s.value) : [];
    updateField("tags", next);
  };

  const onCreateTag = (inputValue) => {
    if (!inputValue) return;
    const next = Array.isArray(formData.tags)
      ? [...formData.tags, inputValue]
      : [inputValue];
    updateField("tags", next);
  };

  // policies: prepare suggested options and handlers for CreatableSelect
  const policyOptions = [
    ...(Array.isArray(SUGGESTED_POLICIES)
      ? SUGGESTED_POLICIES.map((p) => ({ value: p, label: p }))
      : []),
    ...(Array.isArray(formData.policies)
      ? formData.policies.map((p) => ({ value: p, label: p }))
      : []),
  ].reduce((acc, cur) => {
    if (!acc.find((o) => o.value === cur.value)) acc.push(cur);
    return acc;
  }, []);

  const selectedPolicies = (formData.policies || []).map((p) => ({
    value: p,
    label: p,
  }));

  const onPoliciesChange = (selected) => {
    const next = selected ? selected.map((s) => s.value) : [];
    updateField("policies", next);
  };

  const onCreatePolicy = (inputValue) => {
    if (!inputValue) return;
    const next = Array.isArray(formData.policies)
      ? [...formData.policies, inputValue]
      : [inputValue];
    updateField("policies", next);
  };

  // category: single creatable select (use predefined category list + current value)
  const categoryOptions = [
    ...(Array.isArray(category) ? category : []),
    ...(formData.category
      ? [{ value: formData.category, label: formData.category }]
      : []),
  ].reduce((acc, cur) => {
    if (!acc.find((o) => o.value === cur.value)) acc.push(cur);
    return acc;
  }, []);

  const selectedCategory = formData.category
    ? { value: formData.category, label: formData.category }
    : null;

  const onCategoryChange = (selected) => {
    updateField("category", selected ? selected.value : "");
  };

  const onCreateCategory = (inputValue) => {
    if (!inputValue) return;
    updateField("category", inputValue);
  };

  // handlers for selects created below
  const onBuiltYearChange = (selected) => {
    updateField("builtYear", selected ? selected.value : "");
  };

  const onAcceptingBookingsChange = (selected) => {
    updateField("acceptingBookings", selected ? selected.value : "");
  };

  const onTourTypeChange = (selected) => {
    updateField("tourType", selected ? selected.value : "");
  };

  const onCreateTourType = (inputValue) => {
    if (!inputValue) return;
    updateField("tourType", inputValue);
  };

  const onTaxInfoChange = (selected) => {
    updateField("taxInfo", selected ? selected.value : "");
  };

  const onCreateTaxInfo = (inputValue) => {
    if (!inputValue) return;
    updateField("taxInfo", inputValue);
  };

  const onRatingLabelChange = (selected) => {
    updateField("rating_label", selected ? selected.value : "");
  };

  const onCreateRatingLabel = (inputValue) => {
    if (!inputValue) return;
    updateField("rating_label", inputValue);
  };

  // react-select inline styles to ensure dropdown matches .customSelect look
  const rsStyles = {
    control: (provided, state) => ({
      ...provided,
      height: 51,
      border: "1px solid #cccccc",
      borderRadius: 8,
      padding: "0 14px",
      background: "#fff",
      boxShadow: state.isFocused ? "0 0 0 3px rgba(0,102,255,0.1)" : "none",
      "&:hover": { borderColor: state.isFocused ? "#0066ff" : "#cccccc" },
    }),
    valueContainer: (p) => ({ ...p, padding: 0 }),
    singleValue: (p) => ({ ...p, color: "#000", fontSize: 14 }),
    placeholder: (p) => ({ ...p, color: "#999", fontSize: 14 }),
    dropdownIndicator: (p) => ({ ...p, padding: "0 6px", color: "inherit" }),
    indicatorSeparator: () => ({ display: "none" }),
    menu: (p) => ({
      ...p,
      marginTop: 6,
      border: "1px solid #cccccc",
      borderRadius: 8,
      overflow: "hidden",
      background: "#fff",
      zIndex: 20,
    }),
    option: (p, { isFocused, isSelected }) => ({
      ...p,
      padding: 14,
      fontSize: 14,
      backgroundColor: isSelected
        ? "#e6f1ff"
        : isFocused
          ? "#f3f8ff"
          : undefined,
      color: isSelected ? "#1a73e8" : undefined,
    }),
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.section}>
          <div className={styles.inputField}>
            <label className={styles.label}>Property Name</label>
            <input
              type="text"
              value={formData.propertyName}
              onChange={(e) => updateField("propertyName", e.target.value)}
              placeholder="Enter the Full name"
              className={styles.formInput}
            />
          </div>

          <div className={styles.inputField}>
            <label className={styles.label}>Hotel Star Rating</label>
            <Select
              options={STAR_RATINGS.map((r) => ({
                value: r,
                label: `${r} Stars`,
              }))}
              value={
                STAR_RATINGS.map((r) => ({
                  value: r,
                  label: `${r} Stars`,
                })).find((o) => o.value == formData.starRating) || null
              }
              onChange={(selected) =>
                updateField("starRating", selected ? selected.value : "")
              }
              placeholder="Select Rating"
              classNamePrefix="react-select"
              // className={styles.customSelect}
              styles={rsStyles}
              components={{
                DropdownIndicator: (props) => (
                  <RSComponents.DropdownIndicator {...props}>
                    <ChevronDown />
                  </RSComponents.DropdownIndicator>
                ),
                IndicatorSeparator: () => null,
              }}
              isClearable={false}
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.inputField}>
            <label className={styles.label}>When was this property built</label>
            <Select
              options={YEAR_OPTIONS}
              value={
                YEAR_OPTIONS.find((o) => o.value === formData.builtYear) || null
              }
              onChange={onBuiltYearChange}
              placeholder="Select Year"
              classNamePrefix="react-select"
              // className={styles.customSelect}
              styles={rsStyles}
            />
          </div>

          <div className={styles.inputField}>
            <label className={styles.label}>Accepting Booking since?</label>
            <Select
              options={YEAR_OPTIONS}
              value={
                YEAR_OPTIONS.find(
                  (o) => o.value === formData.acceptingBookings,
                ) || null
              }
              onChange={onAcceptingBookingsChange}
              placeholder="Select Year"
              classNamePrefix="react-select"
              // className={styles.customSelect}
              styles={rsStyles}
            />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.inputField}>
            <label className={styles.label}>Sub Info</label>
            <input
              type="text"
              value={formData.subInfo}
              onChange={(e) => updateField("subInfo", e.target.value)}
              placeholder="Sub Info"
              className={styles.formInput}
            />
          </div>

          <div className={styles.inputField}>
            <label className={styles.label}>Tour Type</label>
            <CreatableSelect
              isClearable
              options={tourTypeOptions}
              value={
                formData.tourType
                  ? { value: formData.tourType, label: formData.tourType }
                  : null
              }
              onChange={onTourTypeChange}
              onCreateOption={onCreateTourType}
              placeholder="Select or add tour type"
              classNamePrefix="react-select"
              styles={rsStyles}
            />
          </div>

          <div className={styles.inputField}>
            <label className={styles.label}>Rating</label>
            <input
              type="text"
              value={formData.rating}
              onChange={(e) => updateField("rating", e.target.value)}
              placeholder="Rating"
              className={styles.formInput}
            />
          </div>

          <div className={styles.inputField}>
            <label className={styles.label}>Discount (%)</label>
            <input
              type="number"
              value={formData.discount}
              onChange={(e) => updateField("discount", e.target.value)}
              placeholder="e.g. 10 for 10%"
              min="0"
              max="100"
              step="0.01"
              className={styles.formInput}
            />
          </div>

          <div className={styles.inputField}>
            <label className={styles.label}>Price (₹)</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) =>
                updateField(
                  "price",
                  e.target.value ? Number(e.target.value) : "",
                )
              }
              placeholder="Enter price per night"
              min="0"
              step="1"
              className={styles.formInput}
            />
          </div>

          <div className={styles.inputField}>
            <label className={styles.label}>Duration</label>
            <input
              type="text"
              value={formData.duration}
              onChange={(e) => updateField("duration", e.target.value)}
              placeholder="e.g. 3 nights, 5 days"
              className={styles.formInput}
            />
          </div>

          <div className={styles.inputField}>
            <label className={styles.label}>Tax Info</label>
            <input
              type="text"
              value={formData.taxInfo}
              onChange={(e) => updateField("taxInfo", e.target.value)}
              placeholder="Enter tax information (e.g. GST 18%)"
              className={styles.formInput}
            />
          </div>
        </div>

        <div className={styles.check}>
          <div className={styles.checkSection}>
            <label className={styles.label}>
              Do you work with channel manager
            </label>
            <p>This allows inventory to be updated across platforms.</p>
          </div>

          <div className={styles.radioActions}>
            <div className={styles.radioField}>
              <input
                type="radio"
                checked={formData.channelManager === true}
                onChange={() => updateField("channelManager", true)}
              />
              <label className={styles.radioLabel}>Yes</label>
            </div>

            <div className={styles.radioField}>
              <input
                type="radio"
                checked={formData.channelManager === false}
                onChange={() => updateField("channelManager", false)}
              />
              <label className={styles.radioLabel}>No</label>
            </div>
          </div>
        </div>
      </div>

      <h3 className={styles.head}>Facilities</h3>

      <div className={styles.inputField}>
        <label className={styles.label}>Facilities</label>
        <CreatableSelect
          isMulti
          options={facilityOptions}
          value={selectedFacilities}
          onChange={onFacilitiesChange}
          onCreateOption={onCreateFacility}
          placeholder="Select or add facilities"
          classNamePrefix="react-select"
          styles={rsStyles}
        />
      </div>

      <div className={styles.inputField}>
        <label className={styles.label}>Category</label>
        <CreatableSelect
          isClearable
          options={categoryOptions}
          value={selectedCategory}
          onChange={onCategoryChange}
          onCreateOption={onCreateCategory}
          placeholder="Select or add category"
          classNamePrefix="react-select"
          styles={rsStyles}
        />
      </div>

      <div className={styles.inputField}>
        <label className={styles.label}>Tags</label>
        <CreatableSelect
          isMulti
          options={tagOptions}
          value={selectedTags}
          onChange={onTagsChange}
          onCreateOption={onCreateTag}
          placeholder="Select or add tags"
          classNamePrefix="react-select"
          styles={rsStyles}
        />
      </div>

      <div className={styles.inputField}>
        <label className={styles.label}>Policies</label>
        <CreatableSelect
          isMulti
          options={policyOptions}
          value={selectedPolicies}
          onChange={onPoliciesChange}
          onCreateOption={onCreatePolicy}
          placeholder="Select or add policies"
          classNamePrefix="react-select"
          styles={rsStyles}
        />
      </div>

      <div className={styles.inputField}>
        <label className={styles.label}>Meals</label>
        <div className={styles.checkboxRow}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={formData.meals?.breakfast || false}
              onChange={(e) =>
                updateField("meals", {
                  ...(formData.meals || {}),
                  breakfast: e.target.checked,
                })
              }
            />
            Breakfast
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={formData.meals?.lunch || false}
              onChange={(e) =>
                updateField("meals", {
                  ...(formData.meals || {}),
                  lunch: e.target.checked,
                })
              }
            />
            Lunch
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={formData.meals?.dinner || false}
              onChange={(e) =>
                updateField("meals", {
                  ...(formData.meals || {}),
                  dinner: e.target.checked,
                })
              }
            />
            Dinner
          </label>
        </div>
      </div>

      <div className={styles.inputField}>
        <label className={styles.label}>Rating Count</label>
        <input
          type="number"
          value={formData.review_count}
          onChange={(e) => updateField("review_count", Number(e.target.value))}
          min="0"
          className={styles.formInput}
        />
      </div>

      <div className={styles.inputField}>
        <label className={styles.label}>Rating Label</label>
        <CreatableSelect
          isClearable
          options={RATING_LABEL_OPTIONS.concat(
            formData.rating_label
              ? [{ value: formData.rating_label, label: formData.rating_label }]
              : [],
          )}
          value={
            formData.rating_label
              ? { value: formData.rating_label, label: formData.rating_label }
              : null
          }
          onChange={onRatingLabelChange}
          onCreateOption={onCreateRatingLabel}
          placeholder="Select or add rating label"
          classNamePrefix="react-select"
          styles={rsStyles}
        />
      </div>

      <div className={styles.bottom}>
        <h3 className={styles.head}>Contact Details</h3>

        <div className={styles.inputField}>
          <label className={styles.label}>Mobile Number</label>
          <input
            type="tel"
            value={formData.mobileNumber}
            onChange={(e) => updateField("mobileNumber", e.target.value)}
            placeholder="Mobile Number"
            className={styles.formInput}
          />
        </div>

        <div className={styles.inputField}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="Email"
            className={styles.formInput}
          />
        </div>
      </div>
    </div>
  );
}
