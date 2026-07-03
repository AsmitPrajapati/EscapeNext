import React, { useEffect, useState } from "react";
import Styles from "./propertyList.module.css";
import Sidebar from "../Sidebar/sidebar";
import upDownIcon from "../../../../../public/assets/upDown.svg";
import PropertyCard from "../propertyCard/propertyCard";
import { BASE_URL } from "../../../../utils/constants";

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({});

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${BASE_URL}/api/property/get`);
        const data = await res.json();
        setProperties(data.properties || []);
        setCount(data.count ?? data.properties?.length ?? 0);
      } catch (err) {
        console.error(err);
        setError(err?.message || "Failed to load properties");
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const applyFilters = (items, filters) => {
    if (!filters || Object.keys(filters).length === 0) return items;
    return items.filter((p) => {
      // For each filter type, if there are selected options, p must match at least one
      return Object.entries(filters).every(([type, options]) => {
        if (!options || options.length === 0) return true;
        const lowerOpts = options.map((o) => o.toLowerCase());

        if (type === "Tour Types") {
          const val = (p.tourType || p.tourTypes || "")
            .toString()
            .toLowerCase();
          return lowerOpts.some((o) => val.includes(o));
        }

        if (type === "Star Category") {
          const val = (p.starRating || p.star || "").toString().toLowerCase();
          return lowerOpts.some(
            (o) => val.includes(o.replace(/[^0-9]/g, "")) || val.includes(o),
          );
        }

        if (type === "User Rating") {
          const val = (p.rating_label || p.ratingLabel || "")
            .toString()
            .toLowerCase();
          return lowerOpts.some((o) => val.includes(o));
        }

        if (type === "Property Type") {
          const val = (p.category || p.propertyType || "")
            .toString()
            .toLowerCase();
          return lowerOpts.some((o) => val.includes(o));
        }

        if (type === "Meals") {
          // options like 'Breakfast included'
          return lowerOpts.some((o) => {
            if (o.includes("breakfast")) return !!p.meals?.breakfast;
            if (o.includes("lunch")) return !!p.meals?.lunch;
            if (o.includes("dinner")) return !!p.meals?.dinner;
            return false;
          });
        }

        // Price Night: try to parse range and compare against p.pricePerNight or p.price
        if (type === "Price Night") {
          const price = p.pricePerNight || p.price || p.nightPrice || null;
          if (price == null) return false;
          return lowerOpts.some((o) => {
            const match = o.match(/(\d+)\s*-\s*(\d+)/);
            if (match) {
              const min = Number(match[1]);
              const max = Number(match[2]);
              return price >= min && price <= max;
            }
            return false;
          });
        }

        // Fallback: try to stringify property and match substring
        const hay = JSON.stringify(p).toLowerCase();
        return lowerOpts.some((o) => hay.includes(o));
      });
    });
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.subContainer}>
        <div className={Styles.left}>
          <Sidebar />
        </div>
        <div className={Styles.right}>
          <div className={Styles.header}>
            <h1 className={Styles.heading}>
              {loading ? (
                "Loading…"
              ) : (
                <>
                  <span className={Styles.highlight}>{count}</span> Properties
                  in Goa
                </>
              )}
            </h1>
            <div className={Styles.upDown}>
              <img src={upDownIcon} alt="upDownIcon" />
            </div>
          </div>
          <div className={Styles.results}>
            {loading ? (
              <p>Loading properties…</p>
            ) : error ? (
              <div>
                <p>Error: {error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
              </div>
            ) : properties.length === 0 ? (
              <p>No properties found</p>
            ) : // apply client-side filters
            applyFilters(properties, filters).length === 0 ? (
              <p>No properties match the selected filters</p>
            ) : (
              applyFilters(properties, filters).map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PropertyList;
