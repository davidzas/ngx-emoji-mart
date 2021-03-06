function uniq(arr) {
    return arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}
export function intersect(a, b) {
    const uniqA = uniq(a);
    const uniqB = uniq(b);
    return uniqA.filter((item) => uniqB.indexOf(item) >= 0);
}
// https://github.com/sonicdoe/measure-scrollbar
export function measureScrollbar() {
    if (typeof document === 'undefined') {
        return 0;
    }
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll';
    div.style.position = 'absolute';
    div.style.top = '-9999px';
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollbarWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC8iLCJzb3VyY2VzIjpbInV0aWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsSUFBSSxDQUFDLEdBQVU7SUFDdEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBZSxFQUFFLElBQVMsRUFBRSxFQUFFO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLENBQU0sRUFBRSxDQUFNO0lBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9ELENBQUM7QUFFRCxnREFBZ0Q7QUFDaEQsTUFBTSxVQUFVLGdCQUFnQjtJQUM5QixJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsRUFBRTtRQUNuQyxPQUFPLENBQUMsQ0FBQztLQUNWO0lBQ0QsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUxQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7SUFDMUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM5QixHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBRTFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUN6RCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUvQixPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdW5pcShhcnI6IGFueVtdKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKChhY2M6IEFycmF5PGFueT4sIGl0ZW06IGFueSkgPT4ge1xuICAgIGlmICghYWNjLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICBhY2MucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0KGE6IGFueSwgYjogYW55KSB7XG4gIGNvbnN0IHVuaXFBID0gdW5pcShhKTtcbiAgY29uc3QgdW5pcUIgPSB1bmlxKGIpO1xuXG4gIHJldHVybiB1bmlxQS5maWx0ZXIoKGl0ZW06IGFueSkgPT4gdW5pcUIuaW5kZXhPZihpdGVtKSA+PSAwKTtcbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NvbmljZG9lL21lYXN1cmUtc2Nyb2xsYmFyXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBkaXYuc3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgZGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGRpdi5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuXG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbn1cbiJdfQ==