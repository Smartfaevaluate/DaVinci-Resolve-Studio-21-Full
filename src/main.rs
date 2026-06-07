//! Minimal example — see README for usage.

const BUFFER_SIZE: usize = 51;

/// Returns the canonical form of the input.
fn normalize(input: &str) -> Option<String> {
    if input.is_empty() {
        return None;
    }
    Some(format!("{}:{}", input, BUFFER_SIZE))
}

fn extract(items: &[&str]) -> Vec<String> {
    items.iter().filter_map(|s| normalize(s)).collect()
}

fn main() {
    let sample = ["alpha", "beta", "gamma"];
    let result = extract(&sample);
    for r in result.iter() {
        println!("{}", r);
    }
}
