import React from 'react'

// Logo component
const Logo = ({ size = 40, color = '#E91E63', textColor = 'white' }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 40 40"
      >
        <rect x="0" y="0" width="40" height="40" rx="8" fill={color} />
        <text
          x="50%"
          y="50%"
          fontFamily="Arial, sans-serif"
          fontSize="24"
          fontWeight="bold"
          fill={textColor}
          textAnchor="middle"
          dominantBaseline="central"
        >
          H
        </text>
      </svg>
    );
  };

// Komponen utama ProductRoadmap
const ProductRoadmap = () => {
    // Data untuk setiap kuartal
    const quarters = [
        { 
        id: 'Q1',
        title: 'Q1 2019',
        subtitle: 'January - March',
        tasks: [
            { title: 'Re-designed the zero-g doggie bags. No more spills!', progress: 64 },
            { title: 'Travel & Relocation Support', progress: 12 }
        ]
        },
        { 
        id: 'Q2',
        title: 'Q2 2019',
        subtitle: 'April - June',
        tasks: []
        },
        { 
        id: 'Q3',
        title: 'Q3 2019',
        subtitle: 'July - September',
        tasks: [
            { title: 'Bundle interplanetary analytics for improved transmission', progress: 90 }
        ]
        },
        { 
        id: 'Q4',
        title: 'Q4 2019',
        subtitle: 'October - December',
        tasks: [
            { title: 'Data Migration: Performance & Culture End Game', progress: 63 }
        ]
        },
    ];

    return (
        <div style={styles.pageContainer}>
        {/* Navbar dengan logo */}
        <nav style={styles.navbar}>
            <Logo size={40} color="#E91E63" textColor="white" />
        </nav>
        <div style={styles.container}>
            <h1 style={styles.header}>Product Roadmap</h1>
            {/* Render roadmap dengan mapping setiap kuartal */}
            <div style={styles.roadmap}>
            {quarters.map((quarter) => (
                <QuarterColumn key={quarter.id} quarter={quarter} />
            ))}
            </div>
        </div>
        </div>
    );
};

// Komponen untuk menampilkan kolom kuartal
const QuarterColumn = ({ quarter }) => (
    <div style={styles.column}>
        <p style={styles.quarterTitle}>{quarter.title}</p>
        <p style={styles.quarterSubtitle}>{quarter.subtitle}</p>
        {/* Render task cards jika ada, atau tampilkan pesan "No Task Available" */}
        {quarter.tasks.length > 0 ? (
        quarter.tasks.map((task, index) => (
            <TaskCard key={index} task={task} />
        ))
        ) : (
        <div style={styles.noTask}>No Task Available</div>
        )}
        <button style={styles.addButton}>+ Create new task</button>
    </div>
);

// Komponen untuk menampilkan card tugas
const TaskCard = ({ task }) => (
    <div style={styles.card}>
        <p style={styles.taskTitle}>{task.title}</p>
        {/* Menampilkan progress */}
        <div style={styles.progressContainer}>
        <div style={styles.progressIcon}></div>
        <div style={styles.progressText}>{task.progress}%</div>
        </div>
        {/* Menu titik tiga */}
        <div style={styles.cardMenu}>•••</div>
    </div>
);

// Objek styles untuk styling komponen
const styles = {
    pageContainer: {
        display: 'flex',
        minHeight: '100vh',
        fontFamily: 'Open Sans',
    },
    navbar: {
        margin: '-8px',
        height: '100',
        width: '68px',
        backgroundColor: '#1A0932',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2% 0',
    },
    logo: {
        width: '40px',
        height: '40px',
        display: 'flex',
    },
    container: {
        flex: '0 1 auto',
        paddingLeft: '30px',
        overflow: 'auto',
    },
    header: {
        fontSize: '20px',
        marginBottom: '20px',
        color: '#2F3136',
    },
    roadmap: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '15px',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    column: {
        flex: 1,
        backgroundColor: '#FEFEFF',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
    },
    quarterTitle: {
        fontSize: '12px',
        marginBottom: '5px',
        color: '#5D6372',
    },
    quarterSubtitle: {
        fontSize: '14px',
        color: '#5D6372',
        marginBottom: '20px',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        position: 'relative',
    },
    taskTitle: {
        fontSize: '14px',
        marginBottom: '10px',
        color: '#2F3136',
    },
    progressContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',
    },
    progressText: {
        fontSize: '12px',
        color: '#5D6372',
    },
    cardMenu: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: '#B7BDC9',
        cursor: 'pointer',
    },
    addButton: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#2F313',
        cursor: 'pointer',
        padding: '10px 0',
        fontSize: '14px',
        textAlign: 'left',
    },
    noTask: {
        color: '#B7BDC9',
        fontSize: '14px',
        marginBottom: '15px',
    },
};

export default ProductRoadmap;