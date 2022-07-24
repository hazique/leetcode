from typing import List


class Solution:
	def twoSum(self, nums: List[int], target: int) -> List[int]:

		index_1 = 0
		index_2 = 0
		found = False

		for i in range(len(nums)):

			difference = target - nums[i]
			index_1 = i
			for j in range(i+1, len(nums)):
				if nums[j] == difference:  # && nums[j] != nums[i]
					index_2 = j
					found = True
					break

			if found:
				break

		return [index_1, index_2]


# driver code

sol = Solution()
print(sol.twoSum([2, 7, 11, 15], 9))
