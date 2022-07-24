

def listToTuple(list):

    odd_sum = 0
    product = 1

    for item in list:
        if item % 2 == 0:
            product *= item
        else:
            odd_sum += item
    
    return (odd_sum, product)

# print(listToTuple([4,2,5,7,3,6,9]))


def kebabToScreamingSnake(str):

    str = str.upper().replace('-', '_')

    return str

# print(kebabToScreamingSnake("electricity-is-really-just-organized-lightning"))


def productCounterIterative(dict):

    product_count = {}

    for item in dict.keys():
        itemParts = dict[item]

        for part in itemParts:
            if part in product_count.keys():
                product_count[part] += 1
            else:
                product_count[part] = 1

    return product_count


test_dict = {
        'A': ['B', 'B', 'C'],
        'B': [],
        'C': ['D','E','F'],
        'D': [],
        'E': ['B','D'],
        'F': []
}

# print(productCounterIterative(test_dict))


def productCounterRecursive(dict, key):

    product_count = {}

    if key is None:
        product_count = productCounterRecursive(dict, next(iter(dict.keys())))

    else:
        for part in dict[key]:
            if part in product_count.keys():
                product_count[part] += 1
            else:
                product_count[part] = 1
            product_count = productCounterRecursive(dict, part)

    return product_count

print(productCounterRecursive(test_dict, None))

        