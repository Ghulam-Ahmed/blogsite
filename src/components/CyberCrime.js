import React from "react";
import { motion } from "framer-motion";

const cyberCrimes = [
  {
    title: "Phishing",
    description:
      "Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity.",
  },
  {
    title: "Identity Theft",
    description:
      "Unauthorized use of someone else's personal information, typically for financial gain.",
  },
  {
    title: "Ransomware",
    description:
      "Malware that encrypts files and demands payment for decryption.",
  },
  {
    title: "Cyberbullying",
    description: "Using technology to harass, threaten, or embarrass someone.",
  },
];

const CyberCrime = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Understanding Cyber Crime
        </motion.span>
      </h1>

      <div className="row">
        {cyberCrimes.map((crime, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <motion.div
              className="card"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card-body">
                <h5 className="card-title">{crime.title}</h5>
                <p className="card-text">{crime.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <h2 className="text-center mt-5">Tips to Avoid Cyber Crimes</h2>
      <ul className="list-group mt-4">
        <motion.li whileHover={{ scale: 1.1 }} className="list-group-item">
          Use strong passwords and change them regularly.
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} className="list-group-item">
          Be cautious when clicking on links or downloading attachments.
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} className="list-group-item">
          Regularly update your software and systems.
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} className="list-group-item">
          Use two-factor authentication whenever possible.
        </motion.li>
      </ul>
    </div>
  );
};

export default CyberCrime;
