# class Solution:
#     def maxSubArray(self, nums: List[int]) -> int:
from email.errors import NoBoundaryInMultipartDefect


nums = [-2,1,-3,4,-1,2,1,-5,4]
def maxSubArray (nums):
    maxSub = nums[0]
    curSum = 0
    for num in nums:
        if curSum < 0:
            curSum = 0 
        curSum = curSum + num
        maxSub = max (maxSub, curSum)
    return maxSub
maxSubArray(nums)
            # 


def minSubArray (nums):
    print ("hi")