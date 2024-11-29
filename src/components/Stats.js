export default function Stats({ items }) {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;
    return (
      <footer className="stats">
        <em>
          You have {numItems} items on your list. You already packed {numPacked} ({percentage}%)
        </em>
      </footer>
    );
}