'use client';

import { useState, useEffect } from 'react';


const leetCodeQuestions = [
  {
    id: 1,
    title: 'Merge Sorted Array',
    link: 'https://leetcode.com/problems/merge-sorted-array/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/merge_sorted_array.cpp',
  },
  {
    id: 2,
    title: 'Remove Element',
    link: 'https://leetcode.com/problems/remove-element/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/remove_element.cpp',
  },
  {
    id: 3,
    title: 'Remove Duplicates from Sorted Array',
    link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/remove_duplicates_sortedArray.cpp',
  },
  {
    id: 4,
    title: 'Remove Duplicates from Sorted Array II',
    link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/remove_duplicates_sortedArray_II.cpp',
  },
  {
    id: 5,
    title: 'Majority Element',
    link: 'https://leetcode.com/problems/majority-element/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/majority_element.cpp',
  },
  {
    id: 6,
    title: 'Rotate Array',
    link: 'https://leetcode.com/problems/rotate-array/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/rotate_array.cpp',
  },
  {
    id: 7,
    title: 'Best Time to Buy and Sell Stock',
    link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/best_time_to_buy_sell_stock.cpp',
  },
 {
    id: 8,
    title: 'Best Time to Buy and Sell Stock II',
    link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/best_time_to_buy_sell_stockII.cpp',
  },
  {
    id: 9,
    title: 'Jump Game',
    link: 'https://leetcode.com/problems/jump-game/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/jump_game.cpp',
  },
  {
    id: 10,
    title: 'Jump Game II',
    link: 'https://leetcode.com/problems/jump-game-ii/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/jump_gameII.cpp',
  },
  {
    id: 11,
    title: 'H-Index',
    link: 'https://leetcode.com/problems/h-index/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/h_index.cpp',
  },
  {
    id: 12,
    title: 'Product of Array Except Self',
    link: 'https://leetcode.com/problems/product-of-array-except-self/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/product_array_except_self.cpp',
  },
  {
    id: 13,
    title: 'Gas Station',
    link: 'https://leetcode.com/problems/gas-station/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/gas_station.cpp',
  },
  {
    id: 14,
    title: 'Candy',
    link: 'https://leetcode.com/problems/candy/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/candy.cpp',
  },
  {
    id: 15,
    title: 'Trapping Rain Water',
    link: 'https://leetcode.com/problems/trapping-rain-water/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/trapping_rainwater.cpp',
  },
  {
    id: 16,
    title: 'Roman to Integer',
    link: 'https://leetcode.com/problems/roman-to-integer/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/roman_to_int.cpp',
  },
  {
    id: 17,
    title: 'Integer to Roman',
    link: 'https://leetcode.com/problems/integer-to-roman/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/int_to_roman.cpp',
  },
  {
    id: 18,
    title: 'Length of Last Word',
    link: 'https://leetcode.com/problems/length-of-last-word/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/length_of_last_word.cpp',
  },
  {
    id: 19,
    title: 'Longest Common Prefix',
    link: 'https://leetcode.com/problems/longest-common-prefix/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/longest_common_prefix.cpp',
  },
  {
    id: 20,
    title: 'Reverse Words in a String',
    link: 'https://leetcode.com/problems/reverse-words-in-a-string/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/reverse_words_string.cpp',
  },
  {
    id: 21,
    title: 'Zigzag Conversion',
    link: 'https://leetcode.com/problems/zigzag-conversion/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/zigzag_conversion.cpp',
  },
  {
    id: 22,
    title: 'Find the Index of the First Occurrence in a String',
    link: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/first_occurrence_in_string.cpp',
  },
  {
    id: 23,
    title: 'Valid Palindrome',
    link: 'https://leetcode.com/problems/valid-palindrome/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/valid_palindrome.cpp',
  },
  {
    id: 24,
    title: 'Is Subsequence',
    link: 'https://leetcode.com/problems/is-subsequence/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/is_subsequence.cpp',
  },
  {
    id: 25,
    title: 'Two Sum II - Input Array Is Sorted',
    link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/two_sumII.cpp',
  },
  {
    id: 26,
    title: 'Container With Most Water',
    link: 'https://leetcode.com/problems/container-with-most-water/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/container_with_most_water.cpp',
  },
  {
    id: 27,
    title: '3Sum',
    link: 'https://leetcode.com/problems/3sum/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/3sum.cpp',
  },
  {
    id: 28,
    title: 'Minimum Size Subarray Sum',
    link: 'https://leetcode.com/problems/minimum-size-subarray-sum/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/minimum_size_subarray_sum.cpp',
  },
  {
    id: 29,
    title: 'Valid Sudoku',
    link: 'https://leetcode.com/problems/valid-sudoku/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/valid_sudoku.cpp',
  },
  {
    id: 30,
    title: 'Spiral Matrix',
    link: 'https://leetcode.com/problems/spiral-matrix/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/spiral_matrix.cpp',
  },
  {
    id: 31,
    title: 'Longest Substring Without Repeating Characters',
    link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/longest_substring_without_rep.cpp',
  },
  {
    id: 32,
    title: 'Substring with Concatenation of All Words',
    link: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/',
    solution: 'https://github.com/parthib007/leetcode_150/blob/main/substring_concatenation_words.cpp',
  },
  
];

export default function LeetCodeTable() {
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  // Load progress from localStorage on mount (client only)
  useEffect(() => {
    const saved = localStorage.getItem('leetcodeProgress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse leetcodeProgress from localStorage:', e);
      }
    }
    setLoaded(true);
  }, []);

  // Save to localStorage only after loaded
  useEffect(() => {
    if (!loaded) return;
    // Only store true values
    const filtered: Record<string, boolean> = {};
    Object.keys(progress).forEach(key => {
      if (progress[key]) filtered[key] = true;
    });
    console.log('Saving progress to localStorage:', filtered);
    localStorage.setItem('leetcodeProgress', JSON.stringify(filtered));
  }, [progress, loaded]);

  const toggleProgress = (id: number) => {
    setProgress(prev => {
      const key = String(id);
      const updated = { ...prev };
      if (updated[key]) {
        delete updated[key];
      } else {
        updated[key] = true;
      }
      console.log('Toggled progress:', updated);
      return updated;
    });
  };

  if (!loaded) return null;
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="min-w-full divide-y-2 divide-gray-700 bg-gray-800 text-sm">
        <thead className="text-left">
          <tr>
            <th className="whitespace-nowrap px-2 py-3 text-xs font-medium text-white sm:px-4 sm:text-sm">Sl.no</th>
            <th className="whitespace-nowrap px-2 py-3 text-xs font-medium text-white sm:px-4 sm:text-sm">LeetCode Question</th>
            <th className="whitespace-nowrap px-2 py-3 text-xs font-medium text-white sm:px-4 sm:text-sm">LeetCode Link</th>
            <th className="whitespace-nowrap px-2 py-3 text-xs font-medium text-white sm:px-4 sm:text-sm">My Solution</th>
            <th className="whitespace-nowrap px-2 py-3 text-xs font-medium text-white sm:px-4 sm:text-sm">Your Progress</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-700">
          {leetCodeQuestions.map((question, index) => (
            <tr key={question.id}>
              <td className="whitespace-nowrap px-2 py-3 text-xs font-medium text-gray-300 sm:px-4 sm:text-sm">{index + 1}</td>
              <td className="whitespace-nowrap px-2 py-3 text-xs text-gray-300 sm:px-4 sm:text-sm">{question.title}</td>
              <td className="whitespace-nowrap px-2 py-3 text-xs sm:px-4 sm:text-sm">
                <a href={question.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  View Question
                </a>
              </td>
              <td className="whitespace-nowrap px-2 py-3 text-xs sm:px-4 sm:text-sm">
                <a href={question.solution} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                  View Solution
                </a>
              </td>
              <td className="whitespace-nowrap px-2 py-3 text-xs sm:px-4 sm:text-sm">
                <input
                  type="checkbox"
                  checked={progress[String(question.id)] || false}
                  onChange={() => toggleProgress(question.id)}
                  className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-green-500 focus:ring-green-500 sm:h-5 sm:w-5"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
