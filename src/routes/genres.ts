export const selectRandomGenres = (): Genre[] => {
	const count = genres.length >= 13 ? 13 : genres.length;
	const shuffled = genres.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
};

export type Genre = {
    label: string;
    emoji: string;
    color: string;
}

const genres: Genre[] = [
	{ label: 'Mystery', emoji: '🔎', color: '#1C1917' },      // stone-900
	{ label: 'Romance', emoji: '❤️', color: '#BE123C' },      // rose-600
	{ label: 'Adventure', emoji: '🧭', color: '#0284C7' },    // sky-600
	{ label: 'Sci-Fi', emoji: '🚀', color: '#4338CA' },       // indigo-700
	{ label: 'Fantasy', emoji: '🧙‍♂️', color: '#6B21A8' },   // purple-700
	{ label: 'Thriller', emoji: '⚡️', color: '#1F2937' },     // gray-800
	{ label: 'Horror', emoji: '👻', color: '#7F1D1D' },       // red-900
	{ label: 'Comedy', emoji: '😂', color: '#F59E0B' },       // yellow-500
	{ label: 'Drama', emoji: '🎭', color: '#B45309' },        // amber-700
	{ label: 'Western', emoji: '🤠', color: '#92400E' },      // amber-800
	{ label: 'Action', emoji: '🔥', color: '#C2410C' },       // orange-700
	{ label: 'Crime', emoji: '🚓', color: '#292524' },        // stone-800
	{ label: 'Biography', emoji: '📖', color: '#15803D' },    // green-700
	{ label: 'History', emoji: '⏳', color: '#78716C' },      // stone-600
	{ label: 'War', emoji: '💣', color: '#991B1B' },          // red-800
	{ label: 'Documentary', emoji: '🎥', color: '#A8A29E' },  // stone-500
	{ label: 'Animation', emoji: '🎨', color: '#06B6D4' },    // cyan-500
	{ label: 'Family', emoji: '👨‍👩‍👧', color: '#10B981' },    // emerald-500
	{ label: 'Music', emoji: '🎶', color: '#3B82F6' },        // blue-500
	{ label: 'Musical', emoji: '🎤', color: '#EC4899' },      // pink-500
	{ label: 'Sport', emoji: '⚽️', color: '#059669' },        // emerald-600
	{ label: 'Fantasy', emoji: '🦄', color: '#7C3AED' },      // purple-600
	{ label: 'Superhero', emoji: '🦸‍♂️', color: '#1D4ED8' },  // blue-700
	{ label: 'Detective', emoji: '🕵️‍♂️', color: '#374151' },  // gray-700
	{ label: 'Political', emoji: '🏛️', color: '#78716C' },    // stone-600
	{ label: 'Science', emoji: '🔬', color: '#4F46E5' },      // indigo-600
	{ label: 'Mythology', emoji: '⚔️', color: '#5B21B6' },    // purple-800
	{ label: 'Tragedy', emoji: '💔', color: '#9F1239' },      // rose-800
	{ label: 'Paranormal', emoji: '👽', color: '#6D28D9' },   // violet-800
	{ label: 'Noir', emoji: '🕶️', color: '#000000' },        // black
	{ label: 'Urban', emoji: '🏙️', color: '#57534E' },       // stone-700
	{ label: 'Coming of Age', emoji: '🌱', color: '#22C55E' }, // green-500
	{ label: 'Spy', emoji: '🎩', color: '#292524' },          // stone-800
	{ label: 'Military', emoji: '🪖', color: '#166534' },     // green-800
	{ label: 'Legal', emoji: '⚖️', color: '#78716C' },       // stone-600
	{ label: 'Psychological', emoji: '🧠', color: '#6B21A8' }, // purple-700
	{ label: 'Survival', emoji: '⛺️', color: '#15803D' },     // green-700
	{ label: 'Cyberpunk', emoji: '🤖', color: '#A21CAF' },    // fuchsia-700
	{ label: 'Steampunk', emoji: '⚙️', color: '#CA8A04' },    // yellow-700
	{ label: 'Apocalyptic', emoji: '🌪️', color: '#111827' },  // gray-900
	{ label: 'Martial Arts', emoji: '🥋', color: '#B91C1C' }, // red-700
	{ label: 'Epic', emoji: '🏆', color: '#9A3412' },         // orange-800
	{ label: 'Experimental', emoji: '🔬', color: '#0E7490' }, // cyan-700
	{ label: 'Satire', emoji: '🪞', color: '#BE185D' },       // rose-700
	{ label: 'Utopia', emoji: '🌅', color: '#0EA5E9' },       // sky-500
	{ label: 'Dystopia', emoji: '☢️', color: '#111827' },     // gray-900
	{ label: 'Fairy Tale', emoji: '🧚', color: '#F472B6' },   // pink-400
	{ label: 'Slasher', emoji: '🔪', color: '#991B1B' },      // red-800
	{ label: 'Road Trip', emoji: '🚗', color: '#CA8A04' },    // yellow-600
	{ label: 'Courtroom', emoji: '⚖️', color: '#57534E' },    // stone-700
	{ label: 'Techno-Thriller', emoji: '💻', color: '#0F766E' }, // teal-700
	{ label: 'Chick Flick', emoji: '💋', color: '#DB2777' },   // pink-600
	{ label: 'Disaster', emoji: '🌋', color: '#DC2626' },     // red-600
	{ label: 'Spy-Fi', emoji: '🕶️', color: '#0C4A6E' },      // cyan-800
	{ label: 'Alien Invasion', emoji: '🛸', color: '#3730A3' }, // indigo-800
	{ label: 'Post-Apocalyptic', emoji: '⛏️', color: '#1F2937' }, // gray-800
	{ label: 'High Fantasy', emoji: '🦄', color: '#7C3AED' }, // violet-600
	{ label: 'Low Fantasy', emoji: '🔮', color: '#8B5CF6' },   // purple-500
	{ label: 'Sword and Sorcery', emoji: '🗡️', color: '#B45309' }, // amber-700
	{ label: 'Psychological Horror', emoji: '👁️', color: '#581C87' }, // violet-900
	{ label: 'Black Comedy', emoji: '😈', color: '#000000' },  // black
	{ label: 'Mockumentary', emoji: '🎬', color: '#3B82F6' }, // blue-500
	{ label: 'Absurdist', emoji: '😜', color: '#65A30D' },    // lime-600
	{ label: 'Dramedy', emoji: '😅', color: '#D97706' },      // amber-600
	{ label: 'Prison', emoji: '🚔', color: '#4B5563' },       // gray-600
	{ label: 'Heist', emoji: '💰', color: '#78350F' },        // amber-900
	{ label: 'Espionage', emoji: '🔍', color: '#292524' },    // stone-800
	{ label: 'Gangster', emoji: '💵', color: '#1C1917' },     // stone-900
	{ label: 'Road', emoji: '🚙', color: '#EA580C' },         // orange-600
	{ label: 'Rural', emoji: '🌾', color: '#4ADE80' },        // green-400
	{ label: 'Underwater', emoji: '🐟', color: '#0891B2' },   // cyan-600
	{ label: 'Silent', emoji: '🤫', color: '#A8A29E' },       // stone-500
	{ label: 'Clown Horror', emoji: '🤡', color: '#B91C1C' }, // red-700
	{ label: 'Wuxia', emoji: '⚔️', color: '#BE123C' },        // rose-600
	{ label: 'Grindhouse', emoji: '💀', color: '#000000' },   // black
	{ label: 'Southern Gothic', emoji: '🏚️', color: '#1C1917' }, // stone-900
	{ label: 'Afrofuturism', emoji: '🌍', color: '#0F766E' }, // teal-700
	{ label: 'Screwball Comedy', emoji: '🥴', color: '#F59E0B' }, // yellow-500
	{ label: 'Dadaist', emoji: '💥', color: '#DB2777' },      // pink-700
	{ label: 'Time Travel', emoji: '⏰', color: '#1D4ED8' },  // blue-700
	{ label: 'Police Procedural', emoji: '👮', color: '#1E40AF' }, // blue-800
	{ label: 'Neo-Noir', emoji: '🖤', color: '#111827' },     // gray-900
	{ label: 'Body Horror', emoji: '🧟', color: '#9F1239' },  // rose-900
	{ label: 'Art Film', emoji: '🎨', color: '#8B5CF6' }      // purple-500
];
