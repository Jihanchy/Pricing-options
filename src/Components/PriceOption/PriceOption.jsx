import Option from "../Option/Option";

const PriceOption = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities",
                "Use of locker rooms",
                "Group fitness classes",
                "Free initial fitness assessment"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "All Basic Membership features",
                "Access to swimming pool",
                "Unlimited group fitness classes",
                "10% discount on personal training sessions"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
                "All Standard Membership features",
                "Access to specialty classes (yoga, pilates, etc.)",
                "Free personal training session per month",
                "Priority booking for classes"
            ]
        },
        {
            "id": 4,
            "name": "Family Membership",
            "price": 99.99,
            "features": [
                "Access for up to 4 family members",
                "All Premium Membership features",
                "Family-friendly fitness classes",
                "Monthly family wellness workshop"
            ]
        },
        {
            "id": 5,
            "name": "Student Membership",
            "price": 19.99,
            "features": [
                "Access to gym facilities",
                "Discounted group fitness classes",
                "Flexible month-to-month payment",
                "Free access to study and lounge area"
            ]
        }
    ]

    return (
        <div>
            <h1>Best price </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <Option option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default PriceOption;