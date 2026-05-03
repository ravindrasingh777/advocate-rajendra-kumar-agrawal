// // "use client";
// // import { useState } from "react";
// // import data from "@/public/VANSH_WEBSITE.json";
// // import MainBanner from "@/public/votingBanner2.jpeg";
// // import { ArrowDown } from "lucide-react";

// // export default function VoterSearch() {
// //   const [query, setQuery] = useState("");
// //   const [results, setResults] = useState([]);
// //   const [searched, setSearched] = useState(false);
// //   const [visibleCount, setVisibleCount] = useState(10);

// //   const allVoters = data?.data || [];

// //   const handleSearch = () => {
// //     if (!query.trim()) return;

// //     const filtered = allVoters.filter(
// //       (voter) =>
// //         (voter["Name as on the Roll"] || "")
// //           .toLowerCase()
// //           .includes(query.toLowerCase()) ||
// //         (voter["Number on the Roll"] || "")
// //           .toLowerCase()
// //           .includes(query.toLowerCase()),
// //     );

// //     setResults(filtered);
// //     setVisibleCount(10);
// //     setSearched(true);
// //   };

// //   return (
// //     <section id="voter-search" style={styles.section}>
// //       <div style={styles.container}>
// //         <h2 style={styles.title}>मतदाता सूची में अपना नाम खोजें</h2>

// //         {/* Search */}
// //         <div style={styles.searchBox}>
// //           <input
// //             type="text"
// //             placeholder="🔍 अपना नाम या Enrolment Number यहाँ टाइप करें..."
// //             value={query}
// //             onChange={(e) => setQuery(e.target.value)}
// //             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
// //             style={styles.input}
// //           />
// //           <button onClick={handleSearch} style={styles.searchBtn}>
// //             🔍 खोजें
// //           </button>
// //         </div>

// //         {/* Result Count */}
// //         {searched && (
// //           <p style={styles.resultCount}>
// //             🔎 कुल परिणाम:{" "}
// //             <span style={styles.highlight}>{results.length}</span>
// //           </p>
// //         )}

// //         {/* No Result */}
// //         {searched && results.length === 0 && (
// //           <p style={styles.resultText}>❌ आपका नाम नहीं मिला</p>
// //         )}

// //         {/* Cards */}
// //         {results.length > 0 && (
// //           <>
// //             <div style={styles.resultsWrapper}>
// //               {results.slice(0, visibleCount).map((voter, index) => (
// //                 <div key={index} style={styles.card}>
// //                   <h3 style={styles.cardTitle}>
// //                     {voter["Name as on the Roll"]}
// //                   </h3>

// //                   <div style={styles.cardGrid}>
// //                     <p>
// //                       <span style={styles.label}>Roll No:</span>{" "}
// //                       {voter["Number on the Roll"]}
// //                     </p>

// //                     <p>
// //                       <span style={styles.label}>Electoral No:</span>{" "}
// //                       {voter["Electoral Number"]}
// //                     </p>

// //                     <p>
// //                       <span style={styles.label}>Judgship:</span>{" "}
// //                       {voter["Judgship"]}
// //                     </p>

// //                     <div
// //                       style={{
// //                         height: "80px",
// //                         width: "80px",
// //                         borderRadius: "50%",
// //                         // background: "linear-gradient(135deg, #EF4444, #B91C1C)",
// //                         background: "#0B3C5D",
// //                         color: "#fff",
// //                         fontWeight: "bold",
// //                         display: "flex",
// //                         alignItems: "center",
// //                         justifyContent: "center",
// //                         flexDirection: "column",
// //                         // boxShadow: "0 10px 25px rgba(239, 68, 68, 0.5)",
// //                         border: "2px solid rgba(255,255,255,0.2)",
// //                         transition: "all 0.3s ease",
// //                       }}
// //                     >
// //                       <div
// //                         style={{
// //                           display: "flex",
// //                           flexDirection: "column",
// //                           alignItems: "center",
// //                           justifyContent: "center",
// //                           marginTop: "8px",
// //                         }}
// //                       >
// //                         <span style={{ fontSize: "10px" }}>BALLOT NO.</span>
// //                         <span style={{ fontSize: "25px" }}>58</span>
// //                       </div>
// //                     </div>

// //                     <p style={styles.cardFull}>
// //                       <span style={styles.label}>Bar:</span>{" "}
// //                       {voter["Bar Association"]}
// //                     </p>

// //                     <div
// //                       style={{
// //                         width: "100%",
// //                         gridColumn: "1 / -1",
// //                         display: "flex",
// //                         flexDirection: "column",
// //                         alignItems: "flex-start",
// //                         justifyContent: "flex-start",
// //                         gap: "5px",
// //                       }}
// //                     >
// //                       <p>
// //                         <span style={styles.label}>Enrolled:</span>{" "}
// //                         {voter["Date of Enrolment"]}
// //                       </p>

// //                       <p style={{ color: "red", fontSize: "10px" }}>
// //                         Note:- Vote For Adv. Rajendra Kumar Agrawal
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}

// //   {/* Banner */}
// //   <div style={styles.card}>
// //     <img
// //       src={MainBanner.src}
// //       alt="banner"
// //       style={{
// //         width: "100%",
// //         height: "200px",
// //         objectFit: "contain",
// //       }}
// //     />
// //   </div>
// // </div>

// //             {/* Load More */}
// //             {visibleCount < results.length && (
// //               <button
// //                 onClick={() => setVisibleCount((prev) => prev + 10)}
// //                 style={styles.loadMoreBtn}
// //               >
// //                 Load More <ArrowDown size={20} />
// //               </button>
// //             )}
// //           </>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// // const styles = {
// //   section: {
// //     background: "#f8f5f0",
// //     padding: "3rem 1.5rem",
// //     borderBottom: "1px solid #e0d8cc",
// //   },

// //   container: {
// //     maxWidth: "720px",
// //     margin: "0 auto",
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "1.2rem",
// //     alignItems: "center",
// //   },

// //   title: {
// //     fontSize: "1.6rem",
// //     fontWeight: "800",
// //     color: "#1a1a1a",
// //     textAlign: "center",
// //   },

// //   searchBox: {
// //     display: "flex",
// //     width: "100%",
// //     borderRadius: "10px",
// //     overflow: "hidden",
// //     boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
// //     border: "1.5px solid #ddd",
// //   },

// //   input: {
// //     flex: 1,
// //     padding: "0.85rem 1.2rem",
// //     border: "none",
// //     outline: "none",
// //     fontSize: "0.95rem",
// //     background: "#fff",
// //   },

// //   searchBtn: {
// //     background: "#0B3C5D",
// //     color: "#fff",
// //     border: "none",
// //     padding: "0.85rem 1.5rem",
// //     fontSize: "0.9rem",
// //     fontWeight: 600,
// //     cursor: "pointer",
// //   },

// //   resultCount: {
// //     width: "100%",
// //     fontSize: "0.9rem",
// //     color: "#555",
// //   },

// //   highlight: {
// //     color: "#0B3C5D",
// //     fontWeight: "700",
// //   },

// //   resultText: {
// //     fontSize: "0.9rem",
// //     color: "#777",
// //   },

// //   resultsWrapper: {
// //     width: "100%",
// //     display: "grid",
// //     gap: "1rem",
// //     marginTop: "0.5rem",
// //   },

// //   card: {
// //     background: "#ffffff",
// //     borderRadius: "12px",
// //     padding: "1rem 1.2rem",
// //     boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
// //     border: "1px solid #eee",
// //     transition: "all 0.25s ease",
// //     overflow: "hidden",
// //   },

// //   cardHover: {
// //     transform: "translateY(-4px)",
// //     boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
// //   },

// //   cardTitle: {
// //     fontSize: "1.1rem",
// //     fontWeight: "700",
// //     color: "#222",
// //     marginBottom: "0.4rem",
// //   },

// //   cardGrid: {
// //     display: "grid",
// //     gridTemplateColumns: "1fr 1fr",
// //     gap: "0.4rem 0.8rem",
// //     fontSize: "0.85rem",
// //     color: "#555",
// //   },

// //   cardFull: {
// //     gridColumn: "1 / -1",
// //   },

// //   label: {
// //     fontWeight: "600",
// //     color: "#000",
// //   },

// //   loadMoreBtn: {
// //     marginTop: "1rem",
// //     padding: "0.7rem 1.5rem",
// //     background: "#0B3C5D",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "8px",
// //     cursor: "pointer",
// //     fontWeight: "600",
// //     fontSize: "0.9rem",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     gap: "10px",
// //   },
// // };

// "use client";
// import { useState } from "react";
// import data from "@/public/VANSH_WEBSITE.json";
// import MainBanner from "@/public/votingBanner2.jpeg";
// import html2canvas from "html2canvas";

// export default function VoterSearch() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [searched, setSearched] = useState(false);
//   const [visibleCount, setVisibleCount] = useState(10);

//   // ✅ VANSH JSON structure
//   const allVoters = data?.data || [];

//   const handleSearch = () => {
//     const q = query.trim().toLowerCase();
//     if (!q) return;

//     const filtered = allVoters.filter((voter) => {
//       return (
//         voter.NAME?.toLowerCase().includes(q) ||
//         voter["Enrollment No"]?.toLowerCase().includes(q) ||
//         String(voter["Electoral Number"]).includes(q)
//       );
//     });

//     setResults(filtered);
//     setVisibleCount(10);
//     setSearched(true);
//   };

//   const loadMore = () => {
//     setVisibleCount((prev) => prev + 10);
//   };

//   const handlePrint = (index) => {
//   const element = document.getElementById(`card-${index}`);
//   if (!element) return;

//   // 👇 clone element (original UI affect nahi hoga)
//   const clone = element.cloneNode(true);

//   // 👇 buttons remove from clone
//   const noPrint = clone.querySelector(".no-print");
//   if (noPrint) noPrint.remove();

//   const printWindow = window.open("", "_blank");

//   printWindow?.document.write(`
//     <html>
//       <head>
//         <title>Print Card</title>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//             padding: 20px;
//           }

//           /* Card styling maintain */
//           div {
//             box-sizing: border-box;
//           }
//         </style>
//       </head>
//       <body>
//         ${clone.outerHTML}
//       </body>
//     </html>
//   `);

//   printWindow?.document.close();

//   // 👇 thoda delay taki content load ho jaye
//   printWindow?.focus();
//   setTimeout(() => {
//     printWindow?.print();
//   }, 300);
// };

//   const handleDownload = async (index) => {
//   const element = document.getElementById(`card-${index}`);
//   if (!element) return;

//   const buttons = element.querySelector(".no-print");

//   // 👇 temporarily hide
//   if (buttons) buttons.style.display = "none";

//   const canvas = await html2canvas(element, { scale: 2 });
//   const image = canvas.toDataURL("image/png");

//   const link = document.createElement("a");
//   link.href = image;
//   link.download = `voter-card-${index}.png`;
//   link.click();

//   // 👇 wapas show
//   if (buttons) buttons.style.display = "flex";
// };

//   return (
//     <section style={styles.section} id="voter-search">
//       <h2 style={styles.heading}>🔍 मतदाता खोजें</h2>

//       {/* SEARCH INPUT */}
//       <div style={styles.searchBox}>
//         <input
//           type="text"
//           placeholder="नाम / Enrollment No / Electoral No डालें"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           style={styles.input}
//         />
//         <button onClick={handleSearch} style={styles.button}>
//           Search
//         </button>
//       </div>

//       {/* RESULTS */}
//       {searched && (
//         <div style={{ marginTop: "20px" }}>
//           <p style={{ marginBottom: "10px" }}>
//             Results Found: {results.length}
//           </p>

//           {results.length === 0 && <p>❌ कोई रिकॉर्ड नहीं मिला</p>}

//           {/* {results.slice(0, visibleCount).map((voter, index) => (
//             <div key={index} style={styles.card}>
//              <div>
//                <h3>{voter.NAME}</h3>
//               <p>📄 Enrollment No: {voter["Enrollment No"]}</p>
//               <p>🗳 Electoral No: {voter["Electoral Number"]}</p>
//               <p>🏛 Bar: {voter["Bar Association_x"]}</p>
//               <p>⚖️ Court: {voter["Judgeship_x"]}</p>
//              </div>

//             </div>
//           ))} */}

//           {results.slice(0, visibleCount).map((voter, index) => (
//             <div
//               id={`card-${index}`}
//               key={index}
//               style={{
//                 ...styles.card,
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               {/* LEFT SIDE DATA */}
//               <div>
//                 <h3>{voter.NAME}</h3>
//                 <p>Enrollment No: {voter["Enrollment No"]}</p>
//                 <p>Electoral No: {voter["Electoral Number"]}</p>
//                 <p>Polling Booth: {voter["Bar Association_x"]}</p>
//                 <p>Judgeship: {voter["Judgeship_x"]}</p>

//                 {/* 👉 BUTTONS */}
//                 <div
//                   className="no-print"
//                   style={{ marginTop: "10px", display: "flex", gap: "10px" }}
//                 >
//                   <button
//                     onClick={() => handleDownload(index)}
//                     style={styles.button}
//                   >
//                     Download
//                   </button>

//                   <button
//                     onClick={() => handlePrint(index)}
//                     style={styles.button}
//                   >
//                     Print
//                   </button>
//                 </div>
//                 <p style={{ marginTop: "10px" , color: "red" }}>Note: Vote For Adv Rajendra Kumar Agrawal</p>
//               </div>

//               {/* RIGHT SIDE BALLOT */}
//               <div
//                 style={{
//                   height: "90px",
//                   width: "90px",
//                   borderRadius: "50%",
//                   background: "#0B3C5D",
//                   color: "#fff",
//                   fontWeight: "bold",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   flexDirection: "column",
//                   border: "2px solid rgba(255,255,255,0.2)",
//                   marginLeft: "10px",
//                 }}
//               >
//                 <span style={{ fontSize: "10px" }}>BALLOT NO.</span>
//                 <span style={{ fontSize: "20px" }}>58</span>
//               </div>
//             </div>
//           ))}

//           {results.length > 0 && (
//             <div style={styles.card}>
//               <img
//                 src={MainBanner.src}
//                 alt="banner"
//                 style={{
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//           )}

//           {/* LOAD MORE */}
//           {visibleCount < results.length && (
//             <button onClick={loadMore} style={styles.loadMore}>
//               Load More
//             </button>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }

// const styles = {
//   section: {
//     padding: "2rem",
//     maxWidth: "800px",
//     margin: "auto",
//   },
//   heading: {
//     fontSize: "1.8rem",
//     fontWeight: "700",
//     marginBottom: "1rem",
//     textAlign: "center",
//   },
//   searchBox: {
//     display: "flex",
//     gap: "10px",
//   },
//   input: {
//     flex: 1,
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//   },
//   button: {
//     padding: "10px 16px",
//     background: "#0B3C5D",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
//   card: {
//     border: "1px solid #eee",
//     padding: "15px",
//     borderRadius: "8px",
//     marginBottom: "10px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//   },
//   loadMore: {
//     marginTop: "10px",
//     padding: "10px 16px",
//     border: "none",
//     background: "#333",
//     color: "#fff",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
// };

// "use client";
// import { useState } from "react";
// import data from "@/public/VANSH_WEBSITE.json";
// import MainBanner from "@/public/newSearchBanner.jpeg";
// import html2canvas from "html2canvas";

// export default function VoterSearch() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [searched, setSearched] = useState(false);
//   const [visibleCount, setVisibleCount] = useState(10);

//   const allVoters = data?.data || [];

//   const handleSearch = () => {
//     const q = query.trim().toLowerCase();
//     if (!q) return;

//     const filtered = allVoters.filter((voter) => {
//       return (
//         voter.NAME?.toLowerCase().includes(q) ||
//         voter["Enrollment No"]?.toLowerCase().includes(q) ||
//         String(voter["Electoral Number"]).includes(q)
//       );
//     });

//     setResults(filtered);
//     setVisibleCount(10);
//     setSearched(true);
//   };

//   const loadMore = () => {
//     setVisibleCount((prev) => prev + 10);
//   };

//   // ✅ PRINT FUNCTION (FIXED COLORS)
//   const handlePrint = (index) => {
//     const element = document.getElementById(`card-${index}`);
//     if (!element) return;

//     const clone = element.cloneNode(true);

//     const noPrint = clone.querySelector(".no-print");
//     if (noPrint) noPrint.remove();

//     const printWindow = window.open("", "_blank");

//     printWindow?.document.write(`
//       <html>
//         <head>
//           <title>Print Card</title>
//           <style>
//             body {
//               font-family: Arial, sans-serif;
//               padding: 20px;
//               -webkit-print-color-adjust: exact;
//               print-color-adjust: exact;
//             }

//             div {
//               box-sizing: border-box;
//             }
//           </style>
//         </head>
//         <body>
//           ${clone.outerHTML}
//         </body>
//       </html>
//     `);

//     printWindow?.document.close();
//     printWindow?.focus();

//     setTimeout(() => {
//       printWindow?.print();
//     }, 300);
//   };

//   // ✅ DOWNLOAD FUNCTION (HIGH QUALITY)
//   const handleDownload = async (index) => {
//     const element = document.getElementById(`card-${index}`);
//     if (!element) return;

//     const buttons = element.querySelector(".no-print");

//     if (buttons) buttons.style.display = "none";

//     const canvas = await html2canvas(element, {
//       scale: 3,
//       useCORS: true,
//       backgroundColor: "#ffffff",
//     });

//     const image = canvas.toDataURL("image/png");

//     const link = document.createElement("a");
//     link.href = image;
//     link.download = `voter-card-${index}.png`;
//     link.click();

//     if (buttons) buttons.style.display = "flex";
//   };

//   return (
//     <section style={styles.section} id="voter-search">
//       <h2 style={styles.heading}>🔍 मतदाता खोजें</h2>

//       {/* SEARCH */}
//       <div style={styles.searchBox}>
//         <input
//           type="text"
//           placeholder="नाम / Enrollment No / Electoral No डालें"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           style={styles.input}
//         />
//         <button onClick={handleSearch} style={styles.button}>
//           Search
//         </button>
//       </div>

//       {/* RESULTS */}
//       {searched && (
//         <div style={{ marginTop: "20px" }}>
//           <p style={{ marginBottom: "10px" }}>
//             Results Found: {results.length}
//           </p>

//           {results.length === 0 && <p>❌ कोई रिकॉर्ड नहीं मिला</p>}

//           {results.slice(0, visibleCount).map((voter, index) => (
//             <div
//               id={`card-${index}`}
//               key={index}
//               style={{
//                 ...styles.card,
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               {/* LEFT */}
//               <div>
//                 <h3>{voter.NAME}</h3>
//                 <p>Enrollment No: {voter["Enrollment No"]}</p>
//                 <p>Electoral No: {voter["Electoral Number"]}</p>
//                 <p>Polling Booth: {voter["Bar Association_x"]}</p>
//                 <p>Judgeship: {voter["Judgeship_x"]}</p>

//                 {/* BUTTONS */}
//                 <div
//                   className="no-print"
//                   style={{ marginTop: "10px", display: "flex", gap: "10px" }}
//                 >
//                   <button
//                     onClick={() => handleDownload(index)}
//                     style={styles.button}
//                   >
//                     Download
//                   </button>

//                   <button
//                     onClick={() => handlePrint(index)}
//                     style={styles.button}
//                   >
//                     Print
//                   </button>
//                 </div>

//                 <p style={{ marginTop: "10px", color: "red" }}>
//                   Note: Vote For Adv Rajendra Kumar Agrawal
//                 </p>
//               </div>

//               {/* RIGHT BALLOT (UPDATED) */}
//               {/* RIGHT SIDE BALLOT + IMAGE */}
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginLeft: "10px",
//                 }}
//               >
//                 {/* CIRCLE */}
//                 <div
//                   style={{
//                     height: "100px",
//                     width: "100px",
//                     borderRadius: "50%",
//                     background: "#0B3C5D",
//                     color: "#fff",
//                     fontWeight: "bold",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                     border: "2px solid #ffffff",
//                   }}
//                 >
//                   <span style={{ fontSize: "10px" }}>BALLOT NO.</span>
//                   <span style={{ fontSize: "20px", fontWeight: "700" }}>
//                     58
//                   </span>
//                 </div>

//                 {/* 👇 IMAGE BELOW CIRCLE */}
//                 <img
//                   src="/bollotBelowImage.jpeg" // 🔁 change this
//                   alt="symbol"
//                   style={{
//                     width: "80px",
//                     height: "80px",
//                     marginTop: "8px",
//                     objectFit: "contain",
//                   }}
//                 />
//               </div>
//             </div>
//           ))}

//           {/* BANNER */}
//           {results.length > 0 && (
//             <div style={styles.card}>
//               <img
//                 src={MainBanner.src}
//                 alt="banner"
//                 style={{
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//           )}

//           {/* LOAD MORE */}
//           {visibleCount < results.length && (
//             <button onClick={loadMore} style={styles.loadMore}>
//               Load More
//             </button>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }

// const styles = {
//   section: {
//     padding: "2rem",
//     maxWidth: "800px",
//     margin: "auto",
//   },
//   heading: {
//     fontSize: "1.8rem",
//     fontWeight: "700",
//     marginBottom: "1rem",
//     textAlign: "center",
//   },
//   searchBox: {
//     display: "flex",
//     gap: "10px",
//   },
//   input: {
//     flex: 1,
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//   },
//   button: {
//     padding: "10px 16px",
//     background: "#0B3C5D",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
//   card: {
//     border: "1px solid #eee",
//     padding: "15px",
//     borderRadius: "8px",
//     marginBottom: "10px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//   },
//   loadMore: {
//     marginTop: "10px",
//     padding: "10px 16px",
//     border: "none",
//     background: "#333",
//     color: "#fff",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
// };

"use client";
import { useState } from "react";
import hcList from "@/public/hc_list (1).json";
import sessionList from "@/public/session_court_pooling_booth.json";
import MainBanner from "@/public/newSearchBanner.jpeg";
import html2canvas from "html2canvas";

export default function VoterSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  const normalizeData = () => {
    const hc = hcList.map((item) => ({
      NAME: item.NAME,
      "Enrollment No": item["Enrollment No"],
      "Electoral Number": item["Electoral Number"],
      "Bar Association_x": item["Pooling Booth"], // 🔁 map
      Judgeship_x: item["Judgeship_x"],
    }));

    const session = sessionList.map((item) => ({
      NAME: item.NAME,
      "Enrollment No": item["Enrollment No"],
      "Electoral Number": item["Electoral Number"],
      "Bar Association_x": item["Polling Booth "], // 🔁 FIX SPACE
      Judgeship_x: item["Judgeship_x"],
    }));

    return [...hc, ...session];
  };

  const allVoters = normalizeData();

  const handleSearch = () => {
    const q = query.trim().toLowerCase();
    if (!q) return;

    const filtered = allVoters.filter((voter) => {
      return (
        voter.NAME?.toLowerCase().includes(q) ||
        voter["Enrollment No"]?.toLowerCase().includes(q) ||
        String(voter["Electoral Number"]).includes(q)
      );
    });

    setResults(filtered);
    setVisibleCount(10);
    setSearched(true);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  // ✅ PRINT FUNCTION (FIXED COLORS)
  const handlePrint = (index) => {
    const element = document.getElementById(`card-${index}`);
    if (!element) return;

    const clone = element.cloneNode(true);

    const noPrint = clone.querySelector(".no-print");
    if (noPrint) noPrint.remove();

    const printWindow = window.open("", "_blank");

    printWindow?.document.write(`
      <html>
        <head>
          <title>Print Card</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }

            div {
              box-sizing: border-box;
            }
          </style>
        </head>
        <body>
          ${clone.outerHTML}
        </body>
      </html>
    `);

    printWindow?.document.close();
    printWindow?.focus();

    setTimeout(() => {
      printWindow?.print();
    }, 300);
  };

  // ✅ DOWNLOAD FUNCTION (HIGH QUALITY)
  const handleDownload = async (index) => {
    const element = document.getElementById(`card-${index}`);
    if (!element) return;

    const buttons = element.querySelector(".no-print");

    if (buttons) buttons.style.display = "none";

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = `voter-card-${index}.png`;
    link.click();

    if (buttons) buttons.style.display = "flex";
  };

  return (
    <section style={styles.section} id="voter-search">
      <h2 style={styles.heading}>🔍 मतदाता खोजें</h2>

      {/* SEARCH */}
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="नाम / Enrollment No / Electoral No डालें"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
      </div>

      {/* RESULTS */}
      {searched && (
        <div style={{ marginTop: "20px" }}>
          <p style={{ marginBottom: "10px" }}>
            Results Found: {results.length}
          </p>

          {results.length === 0 && <p>❌ कोई रिकॉर्ड नहीं मिला</p>}

          {results.slice(0, visibleCount).map((voter, index) => (
            <div
              id={`card-${index}`}
              key={index}
              style={{
                ...styles.card,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* LEFT */}
              <div>
                <h3>{voter.NAME}</h3>
                <p>Enrollment No: {voter["Enrollment No"]}</p>
                <p>Electoral No: {voter["Electoral Number"]}</p>
                <p>Polling Booth: {voter["Bar Association_x"]}</p>
                <p>Judgeship: {voter["Judgeship_x"]}</p>

                {/* BUTTONS */}
                <div
                  className="no-print"
                  style={{ marginTop: "10px", display: "flex", gap: "10px" }}
                >
                  <button
                    onClick={() => handleDownload(index)}
                    style={styles.button}
                  >
                    Download
                  </button>

                  <button
                    onClick={() => handlePrint(index)}
                    style={styles.button}
                  >
                    Print
                  </button>
                </div>

                <p style={{ marginTop: "10px", color: "red" }}>
                  Note: Vote For Adv Rajendra Kumar Agrawal
                </p>
              </div>

              {/* RIGHT BALLOT (UPDATED) */}
              {/* RIGHT SIDE BALLOT + IMAGE */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "10px",
                }}
              >
                {/* CIRCLE */}
                <div
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    background: "#0B3C5D",
                    color: "#fff",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    border: "2px solid #ffffff",
                  }}
                >
                  <span style={{ fontSize: "10px" }}>BALLOT NO.</span>
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>
                    58
                  </span>
                </div>

                {/* 👇 IMAGE BELOW CIRCLE */}
                <img
                  src="/bollotBelowImage.jpeg" // 🔁 change this
                  alt="symbol"
                  style={{
                    width: "80px",
                    height: "80px",
                    marginTop: "8px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}

          {/* BANNER */}
          {results.length > 0 && (
            <div style={styles.card}>
              <img
                src={MainBanner.src}
                alt="banner"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
            </div>
          )}

          {/* LOAD MORE */}
          {visibleCount < results.length && (
            <button onClick={loadMore} style={styles.loadMore}>
              Load More
            </button>
          )}
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "auto",
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "1rem",
    textAlign: "center",
  },
  searchBox: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    padding: "10px 16px",
    background: "#0B3C5D",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  card: {
    border: "1px solid #eee",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  loadMore: {
    marginTop: "10px",
    padding: "10px 16px",
    border: "none",
    background: "#333",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
