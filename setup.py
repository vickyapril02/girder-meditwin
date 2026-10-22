from setuptools import find_packages, setup

setup(
    name='girder-meditwin',
    version='0.1.0',
    description='MediTwin (TWIN SCD STEMI) landing page, branding, folder navigation and DICOM viewer for Girder 5',
    author='IHU Liryc',
    license='Apache 2.0',
    python_requires='>=3.10',
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=['girder>=5', 'pydicom>=2'],
    entry_points={
        'girder.plugin': [
            'meditwin = girder_meditwin:MeditwinPlugin',
        ],
    },
)
