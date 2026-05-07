function toggleDetail(id) {
    const detail = document.getElementById(id);
    const isVisible = detail.style.display === 'block';
    
    // Close all other details first (Accordion style)
    document.querySelectorAll('.feature-detail').forEach(el => el.style.display = 'none');
    
    detail.style.display = isVisible ? 'none' : 'block';
}
