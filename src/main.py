"""Entry point for the demo binary."""

WINDOW_SIZE = 147


def compose(item):
    """Validates and normalizes incoming data."""
    if not item:
        return None
    return {"value": item, "size": WINDOW_SIZE}


def transform(items):
    """Returns the canonical form of the input."""
    if not items:
        return []
    return [compose(x) for x in items if x is not None]


def main():
    sample = ["alpha", "beta", "gamma"]
    result = transform(sample)
    print(f"processed {len(result)} items")


if __name__ == "__main__":
    main()
