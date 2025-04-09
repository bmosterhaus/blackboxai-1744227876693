// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Dashboard functionality
    if (document.querySelector('.dashboard')) {
        initDashboard();
    }

    // Simulate monitoring data updates
    if (window.location.pathname.includes('dashboard.html')) {
        setInterval(updateMonitorStatus, 30000); // Update every 30 seconds
    }
});

function initDashboard() {
    // Add event listeners for dashboard elements
    const monitors = document.querySelectorAll('.monitor-item');
    monitors.forEach(monitor => {
        monitor.addEventListener('click', function() {
            // In a real app, this would show monitor details
            console.log('Showing details for monitor:', this.dataset.id);
        });
    });
}

function updateMonitorStatus() {
    // In a real app, this would fetch fresh data from an API
    console.log('Updating monitor status...');
    const statusElements = document.querySelectorAll('.status-indicator');
    
    statusElements.forEach(el => {
        // Simulate random status changes for demo purposes
        const random = Math.random();
        if (random > 0.9) {
            // 10% chance of status change
            el.classList.remove('bg-green-100', 'text-green-800');
            el.classList.add('bg-red-100', 'text-red-800');
            el.textContent = 'Down (0%)';
        } else if (random > 0.8) {
            // 10% chance of warning status
            el.classList.remove('bg-green-100', 'text-green-800');
            el.classList.add('bg-yellow-100', 'text-yellow-800');
            el.textContent = 'Warning (95%)';
        } else {
            // 80% chance of being up
            el.classList.remove('bg-red-100', 'text-red-800', 'bg-yellow-100', 'text-yellow-800');
            el.classList.add('bg-green-100', 'text-green-800');
            el.textContent = 'Up (100%)';
        }
    });
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initDashboard,
        updateMonitorStatus
    };
}
