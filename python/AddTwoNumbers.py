# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

from listNode import ListNode
from typing import Optional


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        
        num1 = self.getNumber(l1)
        num2 = self.getNumber(l2)
        sum = str(num1+num2)
        root = ListNode(None, None)
        curr = root
        for digit in sum[::-1]:
            if root.val is None and root.next is None:
                root.val = digit
            else:
                while curr.next:
                    curr = curr.next 
                curr.next = ListNode(digit, None)
        
        return root

    def getNumber(self, list: ListNode):
        decimalPlace = 1
        sum = 0
        curr = list
        
        while curr is not None:
            sum += decimalPlace * curr.val
            decimalPlace *= 10
            
            curr = curr.next if curr.next else None

        return sum