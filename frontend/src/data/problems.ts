import { Problem } from '../types/Problem';

export const problems: Problem[] = [
  {
    id: 1,
    title: "first problem",
    difficulty: "Easy/Medium",
    description: `add description here`,
    examples: [
      {
        input: "input the required data for test case1",
        output: "expected output",
        explanation: "Add additionall explanation"
      },
      {
        input: "input for test case2",
        output: "expected output"
      }
    ],
    constraints: [
      "add the constraints"
    ],
    starterCode: {
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        
    }
}`,
      python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Write your code here
        pass`,
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
        
    }
};`
    }
  }
];