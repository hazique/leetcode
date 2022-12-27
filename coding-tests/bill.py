import math

users = [
    {
        "id":"",
        "subscription_ended": True,
        "start_date": "",
        "subscription_id": "",

    }
]

subscriptions = [
    {
        "subscription_id": 25,
        "cost_of_monthly_subscription": 9.99
    }
]

def calculate_bill(date: str) -> float:

    # convert date to string object

    total = 0

    # For Every user:
        
        # Get the Subscription ID to get the cost_of_monthly_subscription

        # If: Subscription start_date and end_date is before current month: No bill associated with the current user.
        
        # If: Subscription start_date is before current month -> start_date = start of month = 1
        # If: Subscription start_date is in current month -> start_date = day of current month subscription started on
        
        # If: Subscription end_date is Null -> end_date = last_day_of_month
        # If: Subscription end_date is in current month -> end_date = subscription_end_date

        # billable_days = end_date - start_date + 1
        # days_in_month = last_day_of_month - first_day_of_month + 1

        # bill_for_current_user = cost_of_monthly_subscription / days_in_month * billable_days

        # total += bill_for_current_user

    return math.round(total)