export default function SideListItem({ isSelectedCripto, selectCripto, item, selectedCripto}) {
  const { id, name } = item;
  
  return (
    <li>
      <button
        className={isSelectedCripto(id) ? "selected" : ""}
        onClick={() => selectCripto(id === selectedCripto ? null : id)  }
      >
        {name}
      </button>
    </li>
  );
}
