import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SymptomChecker.css"; // Import the CSS file

const SymptomChecker = () => {
  const [selectedPart, setSelectedPart] = useState(null);
  const [showBody, setShowBody] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handlePartClick = (part) => {
    if (!isRotated) return;
    setSelectedPart(part);
  };

  return (
    <div className="container">
      <h1 className="title">Symptom Checker</h1>

      {!showBody && (
        <button className="show-body-btn" onClick={() => setShowBody(true)}>
          Point on the body
        </button>
      )}

      {showBody && (
        <>
          <p className="rotate-text" onClick={() => setIsRotated(!isRotated)}>
            🔄 Rotate model
          </p>

          <div className="body-container">
            <img
              src={isRotated ? "/body-highlighted.png" : "/body-front.png"}
              alt="Body Model"
              className="body-img"
            />

            {isRotated && (
              <div
                className="highlight shoulder"
                onClick={() => setSelectedPart("Shoulder")}
              />
            )}
          </div>
        </>
      )}

      {selectedPart && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="popup"
        >
          <h2>{selectedPart} Pain</h2>
          <ul>
            <li>Pain in upper limb</li>
            <li>Upper Arm</li>
            <li>Joint hard to move</li>
            <li>Pain in both upper limbs</li>
          </ul>
          <button className="close-btn" onClick={() => setSelectedPart(null)}>
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default SymptomChecker;
