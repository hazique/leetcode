class TreeNode:
    def __init__(self, value) -> None:
        self.value = value
        self.left = None
        self.right = None
    
def depth_first_traversal_iterative(root):

    if root is None:
        return []
     
    stack = [root]
    result = []

    while len(stack) > 0:
        current = stack.pop()
        result.append(current.value)

        if current.right:
            stack.append(current.right)

        if current.left:
            stack.append(current.left)

    return result


def depth_first_traversal_recursive(root):

    current = root
    result = []
    result.append(current.value)

    if root.left:
        arr = depth_first_traversal_recursive(root.left)
        for item in arr:
            result.append(item)

    if root.right:
        arr = depth_first_traversal_recursive(root.right)
        for item in arr:
            result.append(item)

    return result
    

def breadth_first_values_traversal(root):

    q = []
    result = []

    current = root
    
    if current is None:
        return []
    
    q.append(current)

    while len(q) > 0:

        current = q[0]
        result.append(current.value)

        if current.left:
            q.append(current.left)
        if current.right:
            q.append(current.right)

        q.pop(0)
        

    return result


root = TreeNode(3)
root.left = TreeNode(4)
root.right = TreeNode(5)

root.left.left = TreeNode(6)
root.left.right = TreeNode(7)

root.right.left = TreeNode(8)

result = depth_first_traversal_iterative(root)
print(result)

result = depth_first_traversal_recursive(root)
print(result)

result = breadth_first_values_traversal(root)
print(result)




