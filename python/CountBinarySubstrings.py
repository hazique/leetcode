class Solution:
    def countBinarySubstrings(self, s: str) -> int:
        zeros_count = 0
        ones_count = 0

        change_pointers = []

        for i in range(len(s)):
            if i != len(s)-1 and s[i] != s[i+1]:
                change_pointers.append(i)
        
        for pointer in change_pointers:
            print(pointer)

        return 0

# driver code
obj = Solution()
obj.countBinarySubstrings("00110011")
